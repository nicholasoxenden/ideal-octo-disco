import { Router } from "express";
import { customerLogs, customers, locations } from "../data/seed_data.js";
import { Customer, CustomerLog, Location } from "../db/models.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/seed", async (req, res) => {
  try {
    await Location.deleteMany({});
    await Customer.deleteMany({});
    await CustomerLog.deleteMany({});

    // locations
    for (const location of locations) {
      await location.save();
    }

    // customers
    for (const customer of customers) {
      await customer.save();
    }

    // customer logs
    for (const customerLog of customerLogs) {
      await customerLog.save();
    }

    return res.status(200).json({ message: "Database seeded successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error seeding database" });
  }
});

// Assume req.body contains a locationId, startDate and endDate.
// Assume startDate and endDate to be in ISO 8601 format.
router.post("/opiniionTest", async (req, res) => {
  try {
    const { locationId, startDate, endDate } = req.body;

    // probably don't need as many fields, and may want to return object instead of array
    // if we needed further lookup based on customerId, we could have a separate or modified aggregation for that
    const result = await Customer.aggregate([
      { $match: { locationId } },
      {
        $lookup: {
          from: CustomerLog.collection.name,
          localField: "customerId",
          foreignField: "customerId",
          as: "logs",
        },
      },
      { $unwind: "$logs" },
      {
        $match: {
          "logs.date": { $gte: new Date(startDate), $lte: new Date(endDate) },
        },
      },
      {
        $group: {
          _id: "$customerId",
          locationId: { $first: "$locationId" },
          firstName: { $first: "$firstName" },
          lastName: { $first: "$lastName" },
          email: { $first: "$email" },
          phone: { $first: "$phone" },
          logs: { $push: "$logs" },
        },
      },
      {
        $project: {
          _id: 0,
          customerId: "$_id",
          locationId: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          phone: 1,
          logs: 1,
        },
      },
    ]);

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Error retrieving opiniion test data" });
  }
});

export default router;
