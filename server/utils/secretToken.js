import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret_key = `${process.env.SECRET_KEY}`;

export const createSecretToken = (id) => {
  return jwt.sign({ id }, secret_key, { expiresIn: 3 * 24 * 60 * 60 });
};
