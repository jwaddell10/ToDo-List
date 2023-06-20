/* eslint-disable import/first */
/* eslint-disable no-console */

import './style.css';
import { newProjectDom } from './domfunctionality';

// prevents submit button on form from submitting

const $form = document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
});

const myToDoList = [];
console.log(myToDoList);
// makes popUp form appear

function displayForm() {
  document.querySelector('.form-popup').style.display = 'block';
}

newProjectDom.popUpForm.addEventListener('click', () => {
  displayForm();
});
// function to append values to myList array

/* function addToList() {
  const a = newProjectDom.newTitle.value;
  const b = newProjectDom.newDescription.value;
  const c = newProjectDom.newDueDate.value;
  const d = newProjectDom.newPriorityLevel.value;

  myToDoList.push(a, b, c, d);
  console.log(myToDoList);
} */

function render() {
  newProjectDom.newTitle.value = '';
  newProjectDom.newDescription.value = '';
  newProjectDom.newDueDate.value = '';
  newProjectDom.newPriorityLevel.value = '';
}

const ToDoItemFactory = (title, description, dueDate, priority) => ({
  title,
  description,
  dueDate,
  priority,
  addToList() {
    const a = newProjectDom.newTitle.value;
    const b = newProjectDom.newDescription.value;
    const c = newProjectDom.newDueDate.value;
    const d = newProjectDom.newPriorityLevel.value;
    myToDoList.push(a, b, c, d);
  },

  // function to add it to DOM?

  addToDOM() {
    const myList = newProjectDom.newToDoItems;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 1; i++) {
      const listItem = document.createElement('div');
      listItem.innerHTML = `${newProjectDom.newTitle.value} ${newProjectDom.newDescription.value} ${newProjectDom.newDueDate.value} ${newProjectDom.newPriorityLevel.value}`;
      myList.appendChild(listItem);
    }
  },
});
/* const libraryBook = document.querySelector('#Library-container');
libraryBook.innerHTML = '';

for (let i = 0; i < myLibrary.length; i++) {
  const book = myLibrary[i];
  const bookEl = document.createElement('div');
  bookEl.innerHTML = `<div class="card-header">
      <h3 class="title">${book.title}</h3>
      <h5 class="author">${book.author}</h5>
      <h5 class="pages">${book.pages}` + ` pages</h5>
      <h5 class="read">${book.read ? 'Read' : 'Not read yet'}</h5>
      <button class="remove-Btn" onClick="removeBook(${i})">Remove</button>
      <button class="toggle-read-btn" onClick="toggleRead(${i})">Read</button>`;
  libraryBook.appendChild(bookEl);
}
} */

newProjectDom.addToListBtn.addEventListener('click', () => {
  const newItem = ToDoItemFactory();

  newItem.addToList();
  newItem.addToDOM();
  render();
  console.log(myToDoList);
});
