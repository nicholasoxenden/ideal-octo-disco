import express from "express";
import { connectMongo } from "./db/connect.js";
import bodyParser from "body-parser";
import routes from "./routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

// connecting to MongoDB database
connectMongo();

app.listen(3000, () => {
  console.log("Server is up on port", 3000);
});

export default app;
