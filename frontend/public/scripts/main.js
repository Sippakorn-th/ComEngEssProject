import { getMembers } from "./api.js";
import { handleCreateMember } from "./member.js";

document.addEventListener("DOMContentLoaded", () => {
  const addMemberButton = document.getElementById("signup-button");

  addMemberButton.addEventListener("click", async () => {
    const emailToAdd = document.getElementById("email-to-add");
    const nameToAdd = document.getElementById("username-to-add");
    const passwordToAdd = document.getElementById("password-to-add");
    const conpasswordToAdd = document.getElementById("con-password-to-add");
    if (
      emailToAdd.value === "" ||
      nameToAdd.value === "" ||
      passwordToAdd.value === "" ||
      conpasswordToAdd.value === ""
    ) {
      alert("Please fill in all required fields.");
    } else if (passwordToAdd.value != conpasswordToAdd.value) {
      alert("Passwords do not match. Please re-enter.");
    } else {
      handleCreateMember();
      window.location.href = "./mainpage.html";
    }
  });

});

// Modify the goToIndexPage function to fetch all members
async function getAllMems() {
  try {
    const members = await getMembers();
    // Now you have access to the 'members' data, you can do something with it
    console.log(members);

    // Add your code here to handle the members data, such as updating the UI

    // For example, you can navigate to the index page after fetching members
  } catch (error) {
    console.error("Error fetching members:", error);
  }
}

// Add an event listener to the "Back" button
document
  .querySelector(".signup-back-button")
  .addEventListener("click", getAllMems);
