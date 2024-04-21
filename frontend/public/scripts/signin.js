import { getMembers } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {

  const signInButton = document.getElementById("signin-button");
  signInButton.addEventListener("click", async () => {
    const usernameToLogin = document.getElementById("username-to-login");
    const passwordToLogin = document.getElementById("password-to-login");
    if (usernameToLogin.value === "" || passwordToLogin.value === "") {
      alert("Please fill in all required fields.");
    }
    else {
      (getMembers().then((members) => {
        console.log(members);
        for (var i = 0; i < members.length; i++) {
          if (members[i].name === usernameToLogin.value) {
            if (members[i].password === passwordToLogin.value) {
              window.location.href = "./maintemplated.html";
              return;
            }
          }
        }
        console.log("Wrong username of password");
        return;
      })
        .catch((err) => {
          console.error(err);
        }));
    }

  });

});
