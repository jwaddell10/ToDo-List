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
});

const displayKdqol = (() => {
  function displayKdqolTasksForm() {
    document.querySelector('.kdqolitemcontainer').style.display = 'block';
  }

  function cancelKdqolForm() {
    document.querySelector('#kdqoltaskformpopup').style.display = 'none';
  }

  newTaskDom.kdqolButton.addEventListener('click', () => {
    displayKdqolTasksForm();
  });

  newTaskDom.cancelKdqolBtn.addEventListener('click', () => {
    cancelKdqolForm();
  });

  return {
    displayKdqolTasksForm,
    cancelKdqolForm,
    newTaskDom,
  };
});

const displayPhq9 = (() => {
  function displayPhq9TasksForm() {
    document.querySelector('.phq9itemcontainer').style.display = 'block';
  }

  function cancelPhq9TasksForm() {
    document.querySelector('#phq9taskformpopup').style.display = 'none';
  }

  newTaskDom.phq9Button.addEventListener('click', () => {
    console.log('is this running');
    displayPhq9TasksForm();
  });

  newTaskDom.cancelPhq9Btn.addEventListener('click', () => {
    cancelPhq9TasksForm();
  });

  return {
    displayPhq9TasksForm,
    cancelPhq9TasksForm,
    newTaskDom,
  };
});

const displayAssessment = (() => {
  function displayAssessmentTasksForm() {
    document.querySelector('.assessmentitemcontainer').style.display = 'block';
  }

  function cancelAssessmentForm() {
    document.querySelector('#assessmentformpopup').style.display = 'none';
  }

  newTaskDom.assessmentButton.addEventListener('click', () => {
    console.log('is this running');
    displayAssessmentTasksForm();
  });

  newTaskDom.cancelAssessmentBtn.addEventListener('click', () => {
    cancelAssessmentForm();
  });

  return {
    displayAssessmentTasksForm,
    cancelAssessmentForm,
    newTaskDom,
  };
});

const displayOther = (() => {
  function displayOtherTasksForm() {
    document.querySelector('.otheritemcontainer').style.display = 'block';
  }

  function cancelOtherForm() {
    document.querySelector('#othertaskformpopup').style.display = 'none';
  }

  newTaskDom.otherButton.addEventListener('click', () => {
    console.log('is this running');
    displayOtherTasksForm();
  });

  newTaskDom.cancelOtherBtn.addEventListener('click', () => {
    cancelOtherForm();
  });

  return {
    displayOtherTasksForm,
    cancelOtherForm,
    newTaskDom,
  };
});

const completeTaskItems = (() => {
  function completeKdqolItems() {
    newTaskDom.kdqolItems.addEventListener('click', () => {
      console.log('does my kdqol button work');
      newTaskDom.kdqolItems.style = 'text-decoration: line-through;';
    });
  }
  return { completeKdqolItems };
});

// eslint-disable-next-line import/prefer-default-export
export {
  displayTasks, displayKdqol, displayPhq9, displayAssessment, displayOther, completeTaskItems,
};
