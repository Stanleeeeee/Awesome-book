import Books from "./js/book_collection.js";
import emptyList from "./js/custom_event.js";

const form = document.querySelector("form");
const booksSections = document.querySelector(".book-list");
const submitButton = document.querySelector(".submit-button");
const { books } = Books;
const renderBooks = () => {
  if (books.length === 0) {
    booksSections.innerHTML = "<p>You dont have books yet, add some !</p>";
    return;
  }
  booksSections.innerHTML = ``;
  console.log(books.length);
  for (let i = 0; i < books.length; i += 1) {
    const currentBook = books[i];
    const bookTemplate = document.createElement("bookTemp");
    bookTemplate.innerHTML = `<div class="items-container ${
      i % 2 === 0 ? "white" : "gray"
    }">
      <h2>${currentBook.title} by <span> ${currentBook.author} </span></h2>
      <div type="button" class="btn ${currentBook.title}"}">Remove</div>
       </div>`;

    booksSections.appendChild(bookTemplate.firstChild);
  }
};

const fetchAndRenderBooks = () => {
  if (!localStorage.getItem("books")) {
    localStorage.setItem("books", JSON.stringify(books));
  }
  renderBooks();
};
window.onload = fetchAndRenderBooks();

const setRemoveButtonListnters = () => {
  let removeButton = document.querySelectorAll(".btn");
  console.log(removeButton);

  removeButton.forEach((e) =>
    e.addEventListener("click", (event) => {
      const bookTitle = e.classList[1];
      Books.removeBook(bookTitle, event);
      if (books.length === 0) {
        booksSections.dispatchEvent(emptyList);
      }
    })
  );
};
setRemoveButtonListnters();
submitButton.addEventListener("click", () => {
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  if (!title || !author) {
    return;
  }
  console.log("adding");
  Books.addBook(title, author);
  renderBooks();
  setRemoveButtonListnters();
});
booksSections.addEventListener("emptyList", () => {
  booksSections.innerHTML = "<p>You dont have books yet, add some !</p>";
});

export default { renderBooks, booksSections };
