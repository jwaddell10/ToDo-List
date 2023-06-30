/* eslint-disable import/first */
/* eslint-disable no-console */

import './style.css';
// eslint-disable-next-line no-unused-vars
import { select } from 'neo-async';
import { newGoalDom, newTaskDom } from './domfunctionality';
// eslint-disable-next-line import/named, no-unused-vars
import {
  // eslint-disable-next-line no-unused-vars, import/named
  displayGoals, addGoal, moreGoalInfo, changeToGoalForm,
} from './goals';
// eslint-disable-next-line no-unused-vars
import {
  displayTasks, displayKdqol, displayPhq9, displayAssessment, displayOther,
} from './tasks';
// eslint-disable-next-line no-unused-vars

const myGoalToDoList = [];
console.log(myGoalToDoList);

// function to display goal popup form

// functions that control task functions
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

const GoalItemFactory = (title, description, timeFrame) => ({
  title,
  description,
  timeFrame,

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
      listItem.classList.add('goalitems');
      listItem.textContent = `${newGoalDom.newTitle.value}`;
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

newGoalDom.goalAddToListBtn.addEventListener('click', () => {
  console.log('is this running?');
  newItem.addToList();
  newItem.addToDOM();
  render();
  console.log(newItem);

  console.log(myGoalToDoList);
});

function selectForm() {
  newGoalDom.goalHeader.addEventListener('click', () => {
    // make goalThing popup
    newGoalDom.newToDoItems.style.display = 'block';
    newTaskDom.taskItemContainer.style.display = 'none';
  });

  newTaskDom.taskHeader.addEventListener('click', () => {
    newTaskDom.taskItemContainer.style.display = 'block';
    newGoalDom.newToDoItems.style.display = 'none';
  });
}

selectForm();
