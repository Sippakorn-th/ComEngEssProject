import { handleCreateMember} from "./member.js";

document.addEventListener("DOMContentLoaded", () => {

  // const addItemButton = document.getElementById("add-newrow");
  // addItemButton.addEventListener("click", () => {
  //   handleCreateItem();
  // });

  // const filterButton = document.getElementById("filter-button");
  // filterButton.addEventListener("click", () => {
  //   handleFilterItem();
  // });

  // const addMemberButton = document.getElementById("add-member");
  // addMemberButton.addEventListener("click", () => {
  //   handleCreateMember();
  // });

  const addMemberButton = document.getElementById("signup-button");

  addMemberButton.addEventListener("click", () => {
    const emailToAdd = document.getElementById("email-to-add");
    const nameToAdd = document.getElementById("username-to-add");
    const passwordToAdd = document.getElementById("password-to-add");
    const conpasswordToAdd = document.getElementById("con-password-to-add");
    
    handleCreateMember();
  });
});
