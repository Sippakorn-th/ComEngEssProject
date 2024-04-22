import { createScore } from "./api.js";

export async function handleCreateScore(avg_score, name) {
  const emailToAdd = document.getElementById("email-to-add");
  const nameToAdd = document.getElementById("username-to-add");
  //console.log(avg_score);
  //console.log(name);
  await createScore({
    name: name,
    average_guess: avg_score,
    date: Date.now(),
  });
}
