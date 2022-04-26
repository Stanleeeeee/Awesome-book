let showList = document.querySelector(".list");
let addNew = document.querySelector(".add-new");
let showContact = document.querySelector(".contact");

let booksList = document.querySelector(".books");
let addBookForm = document.querySelector(".add-section");
let contactSection = document.querySelector(".contact-section");

addNew.addEventListener("click", () => {
  addBookForm.style.display = "flex";
  booksList.style.display = "none";
  contactSection.style.display = "none";
});

showList.addEventListener("click", () => {
  addBookForm.style.display = "none";
  booksList.style.display = "flex";
  contactSection.style.display = "none";
});

showContact.addEventListener("click", () => {
  addBookForm.style.display = "none";
  booksList.style.display = "none";
  contactSection.style.display = "flex";
});
