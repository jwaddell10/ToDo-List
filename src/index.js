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


function createToDoItem (title, description, dueDate, priority) 
const ToDoItemFactory = (title, description, dueDate, priority) => ({
  title: newProjectDom.newTitle.value,
  description: newProjectDom.newDescription.value,
  dueDate: newProjectDom.newDueDate.value,
  priority: newProjectDom.newPriorityLevel.value,

  addToList() {
    myToDoList.push(title, description, dueDate, priority);
  },
});
const newItem = ToDoItemFactory(newProjectDom.title.value);

newProjectDom.addToListBtn.addEventListener('click', () => {
  newItem.addToList();
  render();
  console.log(myToDoList);
});
