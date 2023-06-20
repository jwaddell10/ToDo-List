/* eslint-disable import/first */
/* eslint-disable no-console */

import './style.css';
import { newProjectDom } from './domfunctionality';

document.querySelector('.todoprioritylevel').selectedIndex = -1;

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
  document.querySelector('.form-popup').style.display = 'none';
}

// factory function to create Todo list items

const ToDoItemFactory = (title, description, dueDate, priority) => ({
  title,
  description,
  dueDate,
  priority,

  // function to check if input fields are empty

  addToList() {
    const a = newProjectDom.newTitle.value;
    const b = newProjectDom.newDescription.value;
    const c = newProjectDom.newDueDate.value;
    const d = newProjectDom.newPriorityLevel.value;
    if (a === '' || b === '') { return; }
    myToDoList.push(a, b, c, d);
  },

  // function to add item to DOM

  addToDOM() {
    const myList = newProjectDom.newToDoItems;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 1; i++) {
      const listItem = document.createElement('div');
      listItem.textContent = `${newProjectDom.newTitle.value} ${newProjectDom.newDescription.value} ${newProjectDom.newDueDate.value} ${newProjectDom.newPriorityLevel.value}`;
      if (`${newProjectDom.newTitle.value}` === '' || `${newProjectDom.newDescription.value}` === '') {
        // eslint-disable-next-line no-useless-return
        return;
      }
      myList.appendChild(listItem);
    }
  },
});
const newItem = ToDoItemFactory();
console.log(newItem);
newProjectDom.addToListBtn.addEventListener('click', () => {
  newItem.addToList();
  newItem.addToDOM();
  render();
  console.log(newItem);

  console.log(myToDoList);
});
