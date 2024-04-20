import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  average_guess: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Score = mongoose.model("Score", scoreSchema);

export default Score;
