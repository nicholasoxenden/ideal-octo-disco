import { Location, Customer, CustomerLog } from "../db/models.js";

export const locations = [
  new Location({ name: "Location 1", locationId: "1" }),
  new Location({ name: "Location 2", locationId: "2" }),
  new Location({ name: "Location 3", locationId: "3" }),
];

export const customers = [
  new Customer({
    customerId: "1",
    locationId: "1",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
  }),
  new Customer({
    customerId: "2",
    locationId: "1",
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@example.com",
    phone: "0987654321",
  }),
  new Customer({
    customerId: "3",
    locationId: "2",
    firstName: "David",
    lastName: "Johnson",
    email: "davidjohnson@example.com",
    phone: "9876543210",
  }),
  new Customer({
    customerId: "4",
    locationId: "3",
    firstName: "Sarah",
    lastName: "Williams",
    email: "sarahwilliams@example.com",
    phone: "2345672291",
  }),
];

export const customerLogs = [
  new CustomerLog({
    customerId: "1",
    type: "Feedback",
    text: "Great customer service!",
    date: new Date("2024-01-01"),
  }),
  new CustomerLog({
    customerId: "1",
    type: "Feedback",
    text: "Great customer service again!",
    date: new Date("2024-02-01"),
  }),
  new CustomerLog({
    customerId: "2",
    type: "Complaint",
    text: "Service was slow.",
    date: new Date("2024-02-01"),
  }),
  new CustomerLog({
    customerId: "2",
    type: "Complaint",
    text: "Service was really slow!",
    date: new Date("2024-04-01"),
  }),
  new CustomerLog({
    customerId: "3",
    type: "Feedback",
    text: "Love the product!",
    date: new Date("2024-03-01"),
  }),
  new CustomerLog({
    customerId: "3",
    type: "Complaint",
    text: "Too expensive.",
    date: new Date("2024-04-01"),
  }),
];
