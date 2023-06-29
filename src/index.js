/* eslint-disable import/first */
/* eslint-disable no-console */

import './style.css';
// eslint-disable-next-line no-unused-vars
import { newGoalDom, newTaskDom } from './domfunctionality';
// eslint-disable-next-line import/named, no-unused-vars
import { displayGoals } from './goals';
// eslint-disable-next-line no-unused-vars
import {
  displayTasks, displayKdqol, displayPhq9, displayAssessment, displayOther,
} from './tasks';
// eslint-disable-next-line no-unused-vars

const myGoalToDoList = [];
console.log(myGoalToDoList);

// function to display goal popup form

// functions that control task functions
fdsfd
displayTasks();
displayKdqol();
displayPhq9();
displayAssessment();
displayOther();

function render() {
  if (`${newGoalDom.newTitle.value}` === '' || `${newGoalDom.newDescription.value}` === '') {
    // eslint-disable-next-line no-useless-return
    return;
  }
  newGoalDom.newTitle.value = '';
  newGoalDom.newDescription.value = '';
  newGoalDom.newGoalTimeFrame.value = '';
  document.querySelector('.form-popup').style.display = 'none';
}

// factory function to create Todo Goal list items

const GoalItemFactory = (title, description, priority) => ({
  title,
  description,
  priority,

  addToList() {
    const a = newGoalDom.newTitle.value;
    const b = newGoalDom.newDescription.value;
    const c = newGoalDom.newGoalTimeFrame.value;
    if (a === '' || b === '') { return; }
    myGoalToDoList.push(a, b, c);
  },

  // function to add item to DOM

  addToDOM() {
    const myList = newGoalDom.newToDoItems;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 1; i++) {
      const listItem = document.createElement('div');
      listItem.textContent = `${newGoalDom.newTitle.value} ${newGoalDom.newDescription.value} ${newGoalDom.newGoalTimeFrame.value}`;
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
const thisItem = document.querySelector('#goalAddBtn');
thisItem.addEventListener('click', () => {
  console.log('is this running?');
});

newGoalDom.goalAddToListBtn.addEventListener('click', () => {
  console.log('is this running?');
  newItem.addToList();
  newItem.addToDOM();
  render();
  console.log(newItem);

  console.log(myGoalToDoList);
});
