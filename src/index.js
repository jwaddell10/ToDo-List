/* eslint-disable import/first */
/* eslint-disable no-console */

import './style.css';
// eslint-disable-next-line no-unused-vars
import { newGoalDom, newTaskDom } from './domfunctionality';
// eslint-disable-next-line import/named, no-unused-vars
import {
  // eslint-disable-next-line no-unused-vars, import/named
  displayGoals, addGoal, moreGoalInfo, changeToGoalForm,
} from './goals';
// eslint-disable-next-line no-unused-vars
import {
  // eslint-disable-next-line no-unused-vars
  displayTasks, displayKdqol, displayPhq9, displayAssessment, displayOther,
} from './tasks';
// eslint-disable-next-line no-unused-vars

const myGoalToDoList = [];
const myKdqolList = [];
const myPhq9List = [];
const myAssessmentList = [];
const myOtherList = [];
// function to display goal popup form
// eslint-disable-next-line no-plusplus

/* const removeKdqolTask = (e) => {
  delete myKdqolList;
  console.log(e);
  // const item = e.currentTarget;
  console.log(myKdqolList);
  // item.remove();
  // const itemIndex = myKdqolList.indexOf(userInput);
  // myKdqolList.splice(itemIndex, 1);
  // console.log(myKdqolList);
//  console.log('the remove item thing works');
  // delete myKdqolList[e];
  // console.log(myKdqolList);
}; */
// functions that control task functions
displayTasks();
displayKdqol();
displayPhq9();
displayAssessment();
displayOther();

// rerenders Goal form to be blank after using

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
      const goalItem = document.getElementsByClassName('goalitems');
      listItem.classList.add('goalitems');
      listItem.textContent = `${newGoalDom.newTitle.value} ${newGoalDom.newDescription.value}`;
      if (`${newGoalDom.newTitle.value}` === '' || `${newGoalDom.newDescription.value}` === '') {
        // eslint-disable-next-line no-useless-return
        return;
      }
      myList.appendChild(listItem);
      goalItem.addEventListener('click', () => {
        goalItem.remove();
        myGoalToDoList.splice(listItem, 2);
      });
    }
  },
});
const newItem = GoalItemFactory();
// event listener to create to do goal items

newGoalDom.goalAddToListBtn.addEventListener('click', () => {
  newItem.addToList();
  newItem.addToDOM();
  render();
});

// creates Kdqol tasks

const KDQOLFactory = (name, dueDate) => ({
  name,
  dueDate,

  addToKdqolList() {
    const a = newTaskDom.kdqolTitle.value;
    const b = newTaskDom.kdqolDueDate.value;
    myKdqolList.push(a, b);
  },

  addKdqolToDOM() {
    const kdqolList = newTaskDom.newKdqolItems;
    const kdqolItem = document.createElement('li');
    kdqolItem.classList.add('kdqolitems');
    kdqolItem.setAttribute('data-value', `${newTaskDom.kdqolTitle.value}`);
    kdqolItem.textContent = `${newTaskDom.kdqolTitle.value}`;
    if (`${newTaskDom.kdqolTitle.value}` === '') {
      // eslint-disable-next-line no-useless-return
      return;
    }
    kdqolList.appendChild(kdqolItem);

    kdqolItem.addEventListener('click', (e) => {
      console.log(e.target.value);
      kdqolItem.remove();
      myKdqolList.splice(kdqolItem, 1);
    });
  },
  // look at items in the array, already have this with declared arra
  // pick item to remove
  // remove
  // remove from list
  // remove from DOM
});
const newKdqol = KDQOLFactory();

newTaskDom.kdqolAddBtn.addEventListener('click', () => {
  newKdqol.addToKdqolList();
  newKdqol.addKdqolToDOM();
  // eslint-disable-next-line camelcase
  const myKdqolList_serialized = JSON.stringify(myKdqolList);
  console.log(myKdqolList_serialized);

  localStorage.setItem('myKdqolList', myKdqolList);
  console.log(localStorage);
});
// when DOM Content loaded, get localStorage MyKDQOL list, then print it to DOM

document.addEventListener('DOMContentLoaded', () => {
  console.log(localStorage.myKdqolList);
  console.log(localStorage.getItem('myKdqolList', myKdqolList));
});
// eslint-disable-next-line camelcase
// creates phq9 tasks

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
    const phq9List = newTaskDom.newPhq9Items;

    const phq9item = document.createElement('li');
    phq9item.classList.add('phq9items');
    phq9item.textContent = `${newTaskDom.phq9Title.value}`;
    if (`${newTaskDom.phq9Title.value}` === '') {
      // eslint-disable-next-line no-useless-return
      return;
    }
    phq9List.appendChild(phq9item);
    phq9item.addEventListener('click', (e) => {
      console.log(e.target.value);
      phq9item.remove();
      myPhq9List.splice(phq9item, 1);
      console.log(myPhq9List);
    });
  },
});

const newPhq9 = PHQ9Factory();

newTaskDom.phq9AddBtn.addEventListener('click', () => {
  newPhq9.addToPhq9List();
  newPhq9.addPhq9ToDOM();
  console.log('is this running?');
});

// creates assessment tasks

const assessmentFactory = (name, dueDate) => ({
  name,
  dueDate,

  addToAssessmentList() {
    const a = newTaskDom.assessmentTitle.value;
    const b = newTaskDom.assessmentDueDate.value;
    myAssessmentList.push(a, b);
    console.log(myAssessmentList);
  },

  addAssessmentToDOM() {
    const assessmentList = newTaskDom.newAssessmentItems;
    const assessmentItem = document.createElement('li');
    assessmentItem.classList.add('assessmentitems');
    assessmentItem.textContent = `${newTaskDom.assessmentTitle.value}`;
    if (`${newTaskDom.assessmentTitle.value}` === '') {
      // eslint-disable-next-line no-useless-return
      return;
    }
    assessmentList.appendChild(assessmentItem);
    assessmentItem.addEventListener('click', (e) => {
      console.log(e.target.value);
      assessmentItem.remove();
      myAssessmentList.splice(assessmentItem, 1);
      console.log(myAssessmentList);
    });
  },
});

const newAssessment = assessmentFactory();

newTaskDom.assessmentAddBtn.addEventListener('click', () => {
  newAssessment.addToAssessmentList();
  newAssessment.addAssessmentToDOM();
  console.log('is this running?');
});

// creates other tasks

const OtherFactory = (name, dueDate, description) => ({
  name,
  dueDate,
  description,

  addToOtherList() {
    const a = newTaskDom.otherTitle.value;
    const b = newTaskDom.otherDueDate.value;
    const c = newTaskDom.otherDescription.value;

    myOtherList.push(a, b, c);
    console.log(myOtherList);
  },

  addOtherToDOM() {
    const otherList = newTaskDom.newOtherItems;

    const otherItem = document.createElement('li');
    otherItem.classList.add('otheritems');
    otherItem.textContent = `${newTaskDom.otherTitle.value} ${newTaskDom.otherDescription.value}`;
    if (`${newTaskDom.otherTitle.value}` === '' || `${newTaskDom.otherDescription.value}` === '') {
      // eslint-disable-next-line no-useless-return
      return;
    }
    otherList.appendChild(otherItem);
    otherItem.addEventListener('click', (e) => {
      console.log(e.target.value);
      otherItem.remove();
      myOtherList.splice(otherItem, 2);
      console.log(myOtherList);
    });
  },
});

const newOther = OtherFactory();

newTaskDom.otherAddBtn.addEventListener('click', () => {
  newOther.addToOtherList();
  newOther.addOtherToDOM();
  console.log('is this running?');
});

// displays goal or task forms on click

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
