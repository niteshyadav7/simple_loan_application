import mongoose from "mongoose";

const Connection = (url) => {
  try {
    mongoose.connect(url);
    console.log("database connection successfully connected!👋");
  } catch (err) {
    console.log("Error occurs during database connection!💩");
  }
};
export default Connection;
