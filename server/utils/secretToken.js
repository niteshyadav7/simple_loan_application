import jwt from "jsonwebtoken";
import dotenv from "d"

const secret_key = "mera naam hai jaggu karta hu sabko haggu. ";

export const createSecretToken = (id) => {
  return jwt.sign({ id }, secret_key, { expiresIn: 3 * 24 * 60 * 60 });
};