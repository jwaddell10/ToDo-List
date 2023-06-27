const newGoalDom = (() => {
  const popUpForm = document.querySelector('.add-to-list');
  const newTitle = document.querySelector('#goaltitle');
  const newDescription = document.querySelector('#description');
  const newDueDate = document.querySelector('#due-date');
  const newGoalTimeFrame = document.querySelector('#goaltimeframe');
  const goalAddToListBtn = document.querySelector('#goalAddBtn');
  const form = document.querySelector('.goalform');
  const newToDoItems = document.querySelector('.todoitems');
  const cancelBtn = document.querySelector('#x');
  const selectTaskBtn = document.querySelector('.selecttask');
  const $form = document.querySelector('.form-popup').addEventListener('submit', (e) => {
    e.preventDefault();
  });
  return {
    popUpForm,
    newTitle,
    newDescription,
    newDueDate,
    newGoalTimeFrame,
    goalAddToListBtn,
    form,
    newToDoItems,
    cancelBtn,
    selectTaskBtn,
    $form,
  };
})();

const newTaskDom = (() => {
  const taskPopUpForm = document.querySelector('.selecttask');
  const kdqolButton = document.querySelector('.kdqolbutton');
  const kdqolTitle = document.querySelector('.kdqoltitle');
  const kdqolAddBtn = document.querySelector('#kdqoladdBtn');
  const phq9Button = document.querySelector('.phq9');
  const phq9Title = document.querySelector('.phq9title');
  const phq9AddBtn = document.querySelector('#kdqoladdBtn');

  const assessmentButton = document.querySelector('.assessments');
  const assessmentTitle = document.querySelector('.assessmentstitle');
  const assessmentAddBtn = document.querySelector('#kdqoladdBtn');
  const otherButton = document.querySelector('.other');
  const otherAddBtn = document.querySelector('#kdqoladdBtn');
  const selectTaskBtn = document.querySelector('.selecttask');
  const cancelTaskBtn = document.querySelector('#taskx');
  return {
    taskPopUpForm,
    kdqolButton,
    kdqolTitle,
    kdqolAddBtn,
    phq9Button,
    phq9Title,
    phq9AddBtn,
    assessmentButton,
    assessmentTitle,
    assessmentAddBtn,
    otherButton,
    otherAddBtn,
    selectTaskBtn,
    cancelTaskBtn,
  };
})();

/* const newKdqolDom = (() => {
  const kdqolButton = document.querySelector('.kdqol');

  return {
    kdqolButton,
  };
})(); */

// eslint-disable-next-line import/prefer-default-export
export { newGoalDom, newTaskDom };
