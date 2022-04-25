const form = document.querySelector("form");

let books = [
  {
    title: "Testeroo Testyy",
    author: "Lorem Ipsum",
  },
  { title: "Second Book", author: "Testeroo Testyy" },
];

localStorage.setItem("myname", "yousef");

const fetchBooks = () => {
  if (localStorage.getItem("books")) {
    books = JSON.parse(localStorage.getItem("books"));
  } else {
    localStorage.setItem("books", JSON.stringify(books));
  }
};
const addBook = (title, author) => {
  books.push({ title, author });
  localStorage.setItem("books", JSON.stringify(books));
};

const removeBook = (title, author) => {
  books = books.filter((book) => book.title !== title);
  localStorage.setItem("books", JSON.stringify(books));
};

form.addEventListener("input", () => {
  const title = form.elements.name.title;
  const author = form.elements.name.author;

  addBook(title, author);
});

window.onload = fetchBooks();
