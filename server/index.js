/****************THIRD PARTY LIBRARY IMPORTS*****************/
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

/******************LOCAL IMPORTS******************/
import Connection from "./config/db.js";

dotenv.config();
const { PORT, HOST_NAME, MONGO_DB } = process.env;

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

/**************DATABASE CONNECTION**************/
Connection(MONGO_DB);

/******************server code*******************/
app.listen(PORT || 8080, () => {
  try {
    console.log(`server running on ${HOST_NAME}:${PORT}`);
  } catch (err) {
    console.log("error during server setup", err);
  }
});
