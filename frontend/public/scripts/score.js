import { createScore } from "./api.js";

export async function handleCreateScore(avg_score) {
  const emailToAdd = document.getElementById("email-to-add");
  const nameToAdd = document.getElementById("username-to-add");
  console.log(avg_score);
  await createScore({
    name: "Player3",
    average_guess: avg_score,
    date: Date.now(),
  });
}
