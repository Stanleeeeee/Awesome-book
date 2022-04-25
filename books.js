const form = document.querySelector("form");
const booksSections = document.querySelector(".books");

let books = [
  {
    title: "Testeroo Testyy",
    author: "Lorem Ipsum",
  },
  { title: "Second Book", author: "Testeroo Testyy" },
];

localStorage.setItem("myname", "yousef");
const renderBooks = () => {
  console.log(booksSections);
  console.log("Rendering");
  for (let i = 0; i < books.length; i++) {
    const currentBook = books[i];
    const bookTemplate = document.createElement("bookTemp");
    bookTemplate.innerHTML = `<div class="items-container">
      <h2>${currentBook.title}</h2>
      <p>${currentBook.author}</p>
      <button type="button" class="btn" data="${currentBook.title}">Remove</button>
      <hr class="line" /> </div>`;

    booksSections.appendChild(bookTemplate.firstChild);
  }
};

const fetchAndRenderBooks = () => {
  console.log("fetching");
  if (localStorage.getItem("books")) {
    console.log("books already hre !");
    books = JSON.parse(localStorage.getItem("books"));
    console.log(books);
  } else {
    console.log("correct !");
    localStorage.setItem("books", JSON.stringify(books));
  }
  renderBooks();
};
const addBook = (title, author) => {
  books.push({ title, author });
  localStorage.setItem("books", JSON.stringify(books));
  renderBooks();
};

const removeBook = (title, author) => {
  books = books.filter((book) => book.title !== title);
  localStorage.setItem("books", JSON.stringify(books));
};

form.addEventListener("submit", () => {
  const title = form.elements.name.title;
  const author = form.elements.name.author;

  addBook(title, author);
});

// // const removeButton = document.querySelector(".btn");
// removeButton.addEventListener("click", (e) => {
//   removeButton.getAttribute("data");
//   const bookTitle = removeButton.getAttribute("data");
//   removeBook(bookTitle);
// });
window.onload = fetchAndRenderBooks();
