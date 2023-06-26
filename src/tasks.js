/* eslint-disable no-console */
import './style.css';
// eslint-disable-next-line no-unused-vars
import { newTaskDom } from './domfunctionality';

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
  }

  function cancelTasksForm() {
    document.querySelector('#taskitemformpopup').style.display = 'none';
  }

  newTaskDom.kdqolButton.addEventListener('click', () => {
    displayKdqolTasksForm();
  });

  newTaskDom.cancelTaskBtn.addEventListener('click', () => {
    cancelTasksForm();
  });

  return {
    displayKdqolTasksForm,
    cancelTasksForm,
    newTaskDom,
  };
})();

const displayPhq9 = (() => {
  function displayPhq9TasksForm() {
    document.querySelector('.phq9itemcontainer').style.display = 'block';
  }

  function cancelTasksForm() {
    document.querySelector('#taskitemformpopup').style.display = 'none';
  }

  newTaskDom.phq9Button.addEventListener('click', () => {
    console.log('is this running');
    displayPhq9TasksForm();
  });

  newTaskDom.cancelTaskBtn.addEventListener('click', () => {
    cancelTasksForm();
  });

  return {
    displayPhq9TasksForm,
    cancelTasksForm,
    newTaskDom,
  };
})();

const displayAssessment = (() => {
  function displayAssessmentTasksForm() {
    document.querySelector('.assessmentitemcontainer').style.display = 'block';
  }

  function cancelTasksForm() {
    document.querySelector('#taskitemformpopup').style.display = 'none';
  }

  newTaskDom.assessmentButton.addEventListener('click', () => {
    console.log('is this running');
    displayAssessmentTasksForm();
  });

  newTaskDom.cancelTaskBtn.addEventListener('click', () => {
    cancelTasksForm();
  });

  return {
    displayAssessmentTasksForm,
    cancelTasksForm,
    newTaskDom,
  };
})();

const displayOther = (() => {
  function displayOtherTasksForm() {
    document.querySelector('.otheritemcontainer').style.display = 'block';
  }

  function cancelTasksForm() {
    document.querySelector('#taskitemformpopup').style.display = 'none';
  }

  newTaskDom.otherButton.addEventListener('click', () => {
    console.log('is this running');
    displayOtherTasksForm();
  });

  newTaskDom.cancelTaskBtn.addEventListener('click', () => {
    cancelTasksForm();
  });

  return {
    displayOtherTasksForm,
    cancelTasksForm,
    newTaskDom,
  };
})();

// eslint-disable-next-line import/prefer-default-export
export {
  displayTasks, displayKdqol, displayPhq9, displayAssessment, displayOther,
};
