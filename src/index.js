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
const myKdqolList = [];
const myPhq9List = [];
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

const KDQOLFactory = (name, dueDate) => ({
  name,
  dueDate,

  addToKdqolList() {
    const a = newTaskDom.kdqolTitle.value;
    const b = newTaskDom.kdqolDueDate.value;
    myKdqolList.push(a, b);
    console.log(myKdqolList);
  },

  addKdqolToDOM() {
    const kdqolList = newTaskDom.newTaskItems;

    const kdqolItem = document.createElement('div');
    kdqolItem.classList.add('kdqolitems');
    kdqolItem.textContent = `${newTaskDom.kdqolTitle.value}`;
    if (`${newTaskDom.kdqolTitle.value}` === '') {
      // eslint-disable-next-line no-useless-return
      return;
    }
    kdqolList.appendChild(kdqolItem);
  },
});

const newKdqol = KDQOLFactory();

newTaskDom.kdqolAddBtn.addEventListener('click', () => {
  newKdqol.addToKdqolList();
  newKdqol.addKdqolToDOM();
  console.log('is this running?');
});

const PHQ9Factory = (name, dueDate) => ({
  name,
  dueDate,

  addToPhq9List() {
    const a = newTaskDom.phq9Title.value;
    const b = newTaskDom.phq9DueDate.value;
    myPhq9List.push(a, b);
    console.log(myPhq9List);
  },

  addPhq9ToDOM() {
    const phq9List = newTaskDom.newTaskItems;

    const phq9item = document.createElement('div');
    phq9item.classList.add('phq9items');
    phq9item.textContent = `${newTaskDom.phq9Title.value}`;
    if (`${newTaskDom.phq9Title.value}` === '') {
      // eslint-disable-next-line no-useless-return
      return;
    }
    phq9List.appendChild(phq9item);
  },
});

const newPhq9 = PHQ9Factory();

newTaskDom.phq9AddBtn.addEventListener('click', () => {
  newPhq9.addToPhq9List();
  newPhq9.addPhq9ToDOM();
  console.log('is this running?');
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
