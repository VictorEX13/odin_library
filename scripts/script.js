const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector(".close-modal");
const form1 = document.querySelector("form");
const modal = document.querySelector(".modal");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "already read" : "not read yet"
    }`;
  };
}

function addBookToLibrary(event) {
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);

  const book = new Book(
    formProps.title,
    formProps.author,
    formProps.pages,
    formProps.read
  );

  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const main = document.querySelector("main");
  main.replaceChildren();

  for (let i = 0; i < myLibrary.length; i++) {
    const card = document.createElement("article");
    const bookData = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const info = document.createElement("p");

    title.textContent = "Title: ";
    author.textContent = "Author: ";
    info.textContent = "Info: ";

    const titleContent = document.createElement("span");
    const authorContent = document.createElement("span");
    const infoContent = document.createElement("span");

    titleContent.textContent = myLibrary[i].title;
    authorContent.textContent = myLibrary[i].author;
    infoContent.textContent = `${myLibrary[i].pages} pages | ${
      myLibrary[i].read ? "already read" : "not read yet"
    }`;

    title.appendChild(titleContent);
    author.appendChild(authorContent);
    info.appendChild(infoContent);

    bookData.appendChild(title);
    bookData.appendChild(author);
    bookData.appendChild(info);
    card.appendChild(bookData);
    main.appendChild(card);
  }
}

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

openModalButton.addEventListener("click", openModal);

closeModalButton.addEventListener("click", closeModal);

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(e);
  closeModal();
});
