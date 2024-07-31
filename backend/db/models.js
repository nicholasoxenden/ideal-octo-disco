import { model } from "mongoose";

export const Location = model("Location", {
  locationId: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

export const Customer = model("Customer", {
  customerId: {
    type: String,
    trim: true,
    required: true,
  },
  locationId: {
    type: String,
    trim: true,
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: false,
  },
  phone: {
    type: String,
    trim: true,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

export const CustomerLog = model("CustomerLog", {
  customerId: {
    type: String,
    trim: true,
    required: true,
  },
  type: {
    type: String,
    trim: true,
    required: true,
  },
  text: {
    type: String,
    trim: true,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
