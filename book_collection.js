class Books {
  static books = JSON.parse(localStorage.getItem("books")) ?? [
    {
      title: "Testeroo Testyy",
      author: "Lorem Ipsum",
    },
    { title: "Second Book", author: "Testeroo Testyy" },
  ];

  static addBook = (title, author) => {
    this.books.push({ title, author });
    localStorage.setItem("books", JSON.stringify(this.books));
    window.location.reload();
  };

  static removeBook = (title) => {
    this.books = this.books.filter((book) => book.title !== title);
    localStorage.setItem("books", JSON.stringify(this.books));
    window.location.reload();
  };
}

export default Books;
