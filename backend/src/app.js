import express from "express";
import cors from "cors";

import MemberRoute from "./routes/memberRoute.js";
import ScoreRoute from "./routes/scoreRoute.js";

const app = express();

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow request from other origin (Frontend which is at different port)
app.use(cors());

// use routes
app.use("/members", MemberRoute);
app.use("/scores", ScoreRoute);

export default app;
