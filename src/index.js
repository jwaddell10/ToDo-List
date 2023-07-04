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
  // eslint-disable-next-line no-unused-vars
  displayTasks, displayKdqol, displayPhq9, displayAssessment, displayOther, completeTaskItems,
} from './tasks';
// eslint-disable-next-line no-unused-vars

const myGoalToDoList = [];
const myKdqolList = ['task here'];
const myPhq9List = [];
const myAssessmentList = [];
const myOtherList = [];
console.log(myGoalToDoList);
// function to display goal popup form
// eslint-disable-next-line no-plusplus

const removeTask = (e) => {
  delete myPhq9List[e];
  console.log(myPhq9List);
};

removeTask();

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
// event listener to create to do goal items

newGoalDom.goalAddToListBtn.addEventListener('click', () => {
  console.log('is this running?');
  newItem.addToList();
  newItem.addToDOM();
  render();
  console.log(newItem);

  console.log(myGoalToDoList);
});

// creates Kdqol tasks

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
    const kdqolList = newTaskDom.newKdqolItems;

    const kdqolItem = document.createElement('li');
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
      removeTask(e.target.value);
      phq9item.remove();
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
    otherItem.textContent = `${newTaskDom.otherTitle.value}`;
    if (`${newTaskDom.otherTitle.value}` === '' || `${newTaskDom.otherDescription.value}` === '') {
      // eslint-disable-next-line no-useless-return
      return;
    }
    otherList.appendChild(otherItem);
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

let newKdqolList;

function deleteTask(item) {
  newKdqolList = myKdqolList.filter((e) => e !== item);
  console.log(newKdqolList);
}

deleteTask();
