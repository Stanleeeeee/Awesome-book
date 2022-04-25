const form = document.querySelector("form");
const booksSections = document.querySelector(".books");
const submitButton = document.querySelector(".submit-button");

let books = [
  {
    title: "Testeroo Testyy",
    author: "Lorem Ipsum",
  },
  { title: "Second Book", author: "Testeroo Testyy" },
];

const renderBooks = () => {
  for (let i = 0; i < books.length; i++) {
    const currentBook = books[i];
    const bookTemplate = document.createElement("bookTemp");
    bookTemplate.innerHTML = `<div class="items-container">
      <h2>${currentBook.title}</h2>
      <p>${currentBook.author}</p>
      <button type="button" class="btn ${currentBook.title}"}">Remove</button>
      <hr class="line" /> </div>`;

    booksSections.appendChild(bookTemplate.firstChild);
  }
};

const fetchAndRenderBooks = () => {
  if (localStorage.getItem("books")) {
    books = JSON.parse(localStorage.getItem("books"));
  } else {
    localStorage.setItem("books", JSON.stringify(books));
  }
  renderBooks();
};
const addBook = (title, author) => {
  books.push({ title, author });
  localStorage.setItem("books", JSON.stringify(books));
  window.location.reload();
};

const removeBook = (title, author) => {
  books = books.filter((book) => book.title !== title);
  localStorage.setItem("books", JSON.stringify(books));
  window.location.reload();
};

submitButton.addEventListener("click", (e) => {
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  if (!title || !author) {
    return;
  }
  e.preventDefault();
  addBook(title, author);
});

window.onload = fetchAndRenderBooks();

const removeButton = document.querySelectorAll(".btn");
removeButton.forEach((e) =>
  e.addEventListener("click", () => {
    const bookTitle = e.classList[1];
    removeBook(bookTitle);
  })
);
