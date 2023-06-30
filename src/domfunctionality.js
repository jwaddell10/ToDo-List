const newGoalDom = (() => {
  const popUpForm = document.querySelector('.add-to-list');
  const newTitle = document.querySelector('#goaltitle');
  const newDescription = document.querySelector('#description');
  const newDueDate = document.querySelector('#due-date');
  const newGoalTimeFrame = document.querySelector('#goaltimeframe');
  const goalAddToListBtn = document.querySelector('#goalAddBtn');
  const form = document.querySelector('.goalform');
  const newToDoItems = document.querySelector('.goalform');
  const cancelBtn = document.querySelector('#x');
  const selectTaskBtn = document.querySelector('.selecttask');
  const goalItems = document.querySelector('.goalitems');
  const goalHeader = document.querySelector('.goals');
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
    goalItems,
    goalHeader,
    $form,
  };
})();

const newTaskDom = (() => {
  const taskPopUpForm = document.querySelector('.selecttask');
  const taskItemContainer = document.querySelector('.taskitemswrapper');
  const taskHeader = document.querySelector('.tasks');
  const kdqolButton = document.querySelector('.kdqolbutton');
  const kdqolTitle = document.querySelector('#kdqoltitle');
  const kdqolDueDate = document.querySelector('#kdqolduedate');
  const kdqolAddBtn = document.querySelector('#kdqoladdBtn');
  const phq9Button = document.querySelector('.phq9');
  const phq9Title = document.querySelector('#phq9title');
  const phq9AddBtn = document.querySelector('#phq9addBtn');
  const phq9DueDate = document.querySelector('#phq9duedate');

  const assessmentButton = document.querySelector('.assessments');
  const assessmentTitle = document.querySelector('.assessmentstitle');
  const assessmentAddBtn = document.querySelector('#kdqoladdBtn');
  const otherButton = document.querySelector('.other');
  const otherAddBtn = document.querySelector('#kdqoladdBtn');
  const selectTaskBtn = document.querySelector('.selecttask');
  const cancelTaskBtn = document.querySelector('#taskx');
  const cancelPhq9Btn = document.querySelector('#phq9x');
  const newTaskItems = document.querySelector('.taskitemswrapper');
  const $phq9form = document.querySelector('#phq9taskformpopup').addEventListener('submit', (e) => {
    e.preventDefault();
  return {
    taskPopUpForm,
    taskItemContainer,
    taskHeader,
    kdqolButton,
    kdqolTitle,
    kdqolDueDate,
    kdqolAddBtn,
    phq9Button,
    phq9Title,
    phq9AddBtn,
    phq9DueDate,
    assessmentButton,
    assessmentTitle,
    assessmentAddBtn,
    otherButton,
    otherAddBtn,
    selectTaskBtn,
    cancelTaskBtn,
    cancelPhq9Btn,
    newTaskItems,
    $phq9form,
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