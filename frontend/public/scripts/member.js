import { createMember, getMembers } from "./api.js";
import { MEMBERS } from "./config.js";

export async function handleCreateMember() {
  const emailToAdd = document.getElementById("email-to-add");
  const nameToAdd = document.getElementById("username-to-add");
  const passwordToAdd = document.getElementById("password-to-add");
  await createMember({ email: emailToAdd.value, name: nameToAdd.value, password: passwordToAdd.value });

  nameToAdd.value = "";
}

export async function handleDeleteMember(id) {
  await deleteMember(id);
  await fetchAndDrawTable();
  await populateMembers()
}