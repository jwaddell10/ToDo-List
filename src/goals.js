import './style.css';
import { newGoalDom } from './domfunctionality';

const testFunction = () => { console.log('this is a test'); };

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

export { displayGoals, testFunction };
