/* eslint-disable no-console */
import './style.css';
// eslint-disable-next-line no-unused-vars
import { newTaskDom } from './domfunctionality';

// popup form to ask if it's kdqol/phq9/assessment or other

/* const createTask = (() => {
  // eslint-disable-next-line no-unused-vars
  function createTaskPopUpForm() {
    const taskItems = document.createElement('div');
    taskItems.className = 'taskItems';
  }
  newGoalDom.selectTaskBtn.addEventListener('click', () => {
    console.log('is this running?');
  });
})(); */

const displayTasks = (() => {
  function displayTasksForm() {
    document.querySelector('#taskitemformpopup').style.display = 'block';
  }

  function cancelTasksForm() {
    document.querySelector('#taskitemformpopup').style.display = 'none';
  }

  newTaskDom.taskPopUpForm.addEventListener('click', () => {
    displayTasksForm();
  });

  newTaskDom.cancelTaskBtn.addEventListener('click', () => {
    cancelTasksForm();
  });
  return {
    displayTasksForm,
    cancelTasksForm,
    newTaskDom,
  };
})();

const displayKdqol = (() => {
  function displayKdqolTasksForm() {
    document.querySelector('.kdqolitemcontainer').style.display = 'block';
    document.querySelector('#taskitemformpopup').style.display = 'none';
  }

  /* function cancelTasksForm() {
    document.querySelector('#taskitemformpopup').style.display = 'none';
  } */

  newTaskDom.kdqolButton.addEventListener('click', () => {
    console.log('is this running?');
    displayKdqolTasksForm();
    console.log('is this running?');
  });

  // newTaskDom.cancelTaskBtn.addEventListener('click', () => {
  // cancelTasksForm();
  // });

  return {
    displayKdqolTasksForm,
    // cancelTasksForm,
    newTaskDom,
  };
});

// eslint-disable-next-line import/prefer-default-export
export { displayTasks, displayKdqol };
