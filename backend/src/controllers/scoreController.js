import Score from "../models/scoreModel.js";

export const createScore = async (req, res) => {
  try {
    const newScore = new Score(req.body);
    console.log(newScore);
    await newScore.save();

    res.status(200).json({ message: "OK" });
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({ error: "Bad Request" });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
};
