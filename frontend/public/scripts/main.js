import { getMembers } from "./api.js";
import { handleCreateMember} from "./member.js";

document.addEventListener("DOMContentLoaded", () => {

  const addMemberButton = document.getElementById("signup-button");

  addMemberButton.addEventListener("click", async () => {
    const emailToAdd = document.getElementById("email-to-add");
    const nameToAdd = document.getElementById("username-to-add");
    const passwordToAdd = document.getElementById("password-to-add");
    const conpasswordToAdd = document.getElementById("con-password-to-add");
    if(emailToAdd.value===""||nameToAdd.value===""||passwordToAdd.value===""||conpasswordToAdd.value===""){
      alert("Please fill in all required fields.");
    }
    else if(passwordToAdd.value!=conpasswordToAdd.value){
      alert("Passwords do not match. Please re-enter.");
    }
    else{
      handleCreateMember();
      const members = await getMembers(); 
      alert(members);
    }
    
  });
});
