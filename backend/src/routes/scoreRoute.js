import express from "express";

import * as scoreController from "../controllers/scoreController.js";

const router = express.Router();

router.get("/", scoreController.getScores);
router.post("/", scoreController.createScore);
//router.delete("/:id", scoreController.deleteSCore);

export default router;
