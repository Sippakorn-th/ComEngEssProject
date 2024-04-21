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
    } else if (String(nameToAdd.value).length > 10) {
      alert("Username must not longer than 10 character.");
    } else {
      var emailIsTaken = false;
      var usernameIsTaken = false;


      getMembers()
        .then((members) => {
          console.log(members);
          for (var i = 0; i < members.length; i++) {
            if (members[i].name === nameToAdd.value) {
              usernameIsTaken = true;
              break; // Once found, no need to continue the loop
            }
          }

          for (var i = 0; i < members.length; i++) {
            if (members[i].email === emailToAdd.value) {
              emailIsTaken = true;
              break; // Once found, no need to continue the loop
            }
          }

          // Check email and username taken after the loops
          if (emailIsTaken) {
            alert("This email is taken, please change your email or sign in");
          } else if (usernameIsTaken) {
            alert("This username is taken, please change your username or sign in");
          } else if (String(passwordToAdd.value).length < 8) {
            alert("Password must longer than 8 character.");
          } else if (passwordToAdd.value != conpasswordToAdd.value) {
            alert("Passwords do not match. Please re-enter.");
          } else {
            handleCreateMember();
            window.location.href = "./maintemplated.html";
          }
        })
        .catch((err) => {
          console.error(err);
        });

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
