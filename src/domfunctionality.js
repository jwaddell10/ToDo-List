const newGoalDom = (() => {
  const popUpForm = document.querySelector('.add-to-list');
  const newTitle = document.querySelector('#title');
  const newDescription = document.querySelector('#description');
  const newDueDate = document.querySelector('#due-date');
  const newPriorityLevel = document.querySelector('#priority-level');
  const addToListBtn = document.querySelector('#addBtn');
  const form = document.querySelector('.form');
  const newToDoItems = document.querySelector('.todoitems');
  const cancelBtn = document.querySelector('#x');
  const selectTaskBtn = document.querySelector('.selecttask');
  const $form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
  return {
    popUpForm,
    newTitle,
    newDescription,
    newDueDate,
    newPriorityLevel,
    addToListBtn,
    form,
    newToDoItems,
    cancelBtn,
    selectTaskBtn,
    $form,
  };
})();

const newTaskDom = (() => {
  const taskPopUpForm = document.querySelector('.selecttask');
  const kdqolButton = document.querySelector('.kdqol');
  const kdqolTitle = document.querySelector('.kdqoltitle');
  const phq9Button = document.querySelector('.phq9');
  const phq9Title = document.querySelector('.phq9title');
  const assessmentsButton = document.querySelector('.assessments');
  const assessmentsTitle = document.querySelector('.assessmentstitle');
  const otherButton = document.querySelector('.other');
  const selectTaskBtn = document.querySelector('.selecttask');
  const cancelBtn = document.querySelector('#x');
  return {
    taskPopUpForm,
    kdqolButton,
    kdqolTitle,
    phq9Button,
    phq9Title,
    assessmentsButton,
    assessmentsTitle,
    otherButton,
    selectTaskBtn,
    cancelBtn,
  };
})();

// eslint-disable-next-line import/prefer-default-export
export { newGoalDom, newTaskDom };
