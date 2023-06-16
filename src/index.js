/* eslint-disable import/first */
/* eslint-disable no-console */

import './style.css';
import { newProjectDom } from './domfunctionality';

const $form = document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
});

const myList = [];

function displayForm() {
  document.querySelector('.form-popup').style.display = 'block';
}

newProjectDom.popUpForm.addEventListener('click', () => {
  displayForm();
});
// function to append values to myList array

function addToList() {
  console.log(document.querySelector('#title').value);
  console.log(document.querySelector('#description').value);
  console.log(newProjectDom.newDueDate.value);
  console.log(document.querySelector('#priority-level').value);
}

function render() {
  newProjectDom.newTitle.value = '';
  newProjectDom.newDescription.value = '';
  newProjectDom.newDueDate.value = '';
  newProjectDom.newPriorityLevel.value = '';
}

newProjectDom.addToListBtn.addEventListener('click', () => {
  addToList();
  render();
});
const ToDoItem = (title, description, dueDate, priority) => {
  const testFunction = () => console.log(newProjectDom.newDescription.innerText);
  return {
    title, description, dueDate, priority, testFunction,
  };
};

const toDo = ToDoItem('title here', 'some description', 'due tomorrow', 'high priority');
console.log(toDo);
toDo.testFunction();
