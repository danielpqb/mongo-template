import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { userRouter } from "./routers/userRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});