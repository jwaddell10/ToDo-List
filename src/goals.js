import './style.css';
import { newGoalDom } from './domfunctionality';

const displayGoals = (() => {
  function displayGoalsForm() {
    document.querySelector('#popUpForm').style.display = 'block';
  }

  function cancelForm() {
    document.querySelector('#popUpForm').style.display = 'none';
  }

  newGoalDom.popUpForm.addEventListener('click', () => {
    displayGoalsForm();
  });

  newGoalDom.cancelBtn.addEventListener('click', () => {
    cancelForm();
  });
  return {
    displayGoalsForm,
    cancelForm,
    newGoalDom,
  };
})();

/* const moreGoalInfo = (() => {
  function displayMoreGoalInfo() {
    const goalForm = document.createElement('div');
    goalForm.classList.add('.moreGoalFormInfo');
  }

  newGoalDom.goalItems.addEventListener('click', () => {
    displayMoreGoalInfo();
  });
  return { moreGoalInfo };
})(); */

/* const addGoal = (() => {
  function addGoalToList() {
    console.log(newGoalDom.newTitle.value);
  }

  newGoalDom.goalAddToListBtn.addEventListener('click', () => {
    addGoalToList();
  });
})(); */

// eslint-disable-next-line import/prefer-default-export
export { displayGoals };
