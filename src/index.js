/* eslint-disable import/first */
/* eslint-disable no-console */

import './style.css';
// eslint-disable-next-line no-unused-vars
import { newGoalDom, newTaskDom, newKdqolDom } from './domfunctionality';
// eslint-disable-next-line import/named
import { displayGoals } from './goals';
// eslint-disable-next-line no-unused-vars
import { displayTasks, displayKdqol } from './tasks';
// eslint-disable-next-line no-unused-vars

const myToDoList = [];
console.log(myToDoList);

// makes popUp form appear

displayTasks();

displayGoals();

displayKdqol();
// function to append values to myList array

function render() {
  if (`${newGoalDom.newTitle.value}` === '' || `${newGoalDom.newDescription.value}` === '') {
    // eslint-disable-next-line no-useless-return
    return;
  }
  newGoalDom.newTitle.value = '';
  newGoalDom.newDescription.value = '';
  newGoalDom.newDueDate.value = '';
  newGoalDom.newPriorityLevel.value = '';
  document.querySelector('.form-popup').style.display = 'none';
}

// factory function to create Todo list items

const GoalItemFactory = (title, description, dueDate, priority) => ({
  title,
  description,
  dueDate,
  priority,

  // function to check if input fields are empty

  addToList() {
    const a = newGoalDom.newTitle.value;
    const b = newGoalDom.newDescription.value;
    const c = newGoalDom.newDueDate.value;
    const d = newGoalDom.newPriorityLevel.value;
    if (a === '' || b === '') { return; }
    myToDoList.push(a, b, c, d);
  },

  // function to add item to DOM

  addToDOM() {
    const myList = newGoalDom.newToDoItems;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 1; i++) {
      const listItem = document.createElement('div');
      listItem.textContent = `${newGoalDom.newTitle.value} ${newGoalDom.newDescription.value} ${newGoalDom.newDueDate.value} ${newGoalDom.newPriorityLevel.value}`;
      if (`${newGoalDom.newTitle.value}` === '' || `${newGoalDom.newDescription.value}` === '') {
        // eslint-disable-next-line no-useless-return
        return;
      }
      myList.appendChild(listItem);
    }
  },
});
const newItem = GoalItemFactory();
// event listener to create to do items

newGoalDom.addToListBtn.addEventListener('click', () => {
  newItem.addToList();
  newItem.addToDOM();
  render();
  console.log(newItem);

  console.log(myToDoList);
});
