import userVerification from "../Middleware/userMiddleware.js";
import { Login, SignUp } from "../controllers/userController.js";

import express from "express";

const authRouter = express.Router();

authRouter.post("/signup", SignUp);
authRouter.post("/login", Login);
authRouter.post("/", userVerification);

export default authRouter;
