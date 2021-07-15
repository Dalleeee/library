let myLibrary = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: "180",
        read: "No",
    }
];

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.querySelector('input[name="book-read"]:checked').value;
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    display();
}

const grid = document.getElementById('grid');

function display() {
    reset();
    for(let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        const displayTitle = document.createElement('div');
        const displayAuthor = document.createElement('div');
        const displayPages = document.createElement('div');
        const displayRead = document.createElement('div');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        const toggleButton = document.createElement('button');
        toggleButton.classList.add('read-status')
        displayTitle.textContent = myLibrary[i].title;
        displayAuthor.textContent = myLibrary[i].author;
        displayPages.textContent = myLibrary[i].pages;
        displayRead.textContent = myLibrary[i].read;
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener("click", function() {
            myLibrary.splice(i, 1);
            display();
        })
        toggleButton.innerText = 'Change Read Status';
        toggleButton.addEventListener("click", function() {
            if (myLibrary[i].read === "Yes") {
                myLibrary[i].read = "No";
                display();
            }
            else {
                myLibrary[i].read = "Yes";
                display();
            }
        })
        card.classList.add('card-grid');
        card.appendChild(displayTitle);
        card.appendChild(displayAuthor);
        card.appendChild(displayPages);
        card.appendChild(displayRead);
        card.appendChild(deleteButton);
        card.appendChild(toggleButton);
        grid.appendChild(card);
    }
}

function reset() {
    grid.innerHTML = "";
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener("click", addBookToLibrary);

display()