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
  const assessmentTitle = document.querySelector('#assessmenttitle');
  const assessmentDueDate = document.querySelector('#assessmentduedate');

  const assessmentAddBtn = document.querySelector('#assessmentaddBtn');
  const otherButton = document.querySelector('.other');
  const otherTitle = document.querySelector('#othertitle');
  const otherDueDate = document.querySelector('#otherduedate');

  const otherDescription = document.querySelector('#otherdescription');

  const otherAddBtn = document.querySelector('#otheraddBtn');
  const selectTaskBtn = document.querySelector('.selecttask');
  const cancelTaskBtn = document.querySelector('#taskx');
  const cancelKdqolBtn = document.querySelector('#kdqolx');
  const cancelPhq9Btn = document.querySelector('#phq9x');
  const cancelAssessmentBtn = document.querySelector('#assessmentx');
  const cancelOtherBtn = document.querySelector('#otherx');

  const newTaskItems = document.querySelector('.taskitemswrapper');
  const newKdqolItems = document.querySelector('.kdqolheader');
  const newPhq9Items = document.querySelector('.phq9header');
  const newAssessmentItems = document.querySelector('.assessmentheader');
  const newOtherItems = document.querySelector('.otherheader');
  const kdqolItems = document.querySelector('.kdqolitems');
  const phq9Items = document.querySelector('.phq9items');
  const assessmentItems = document.querySelector('.assessmentitems');
  const otherItems = document.querySelector('.otheritems');
  const $phq9form = document.querySelector('#phq9taskformpopup').addEventListener('submit', (e) => {
    e.preventDefault();
  });
  const $kdqolform = document.querySelector('#kdqoltaskformpopup').addEventListener('submit', (e) => {
    e.preventDefault();
  });
  const $assessmentform = document.querySelector('#assessmentformpopup').addEventListener('submit', (e) => {
    e.preventDefault();
  });
  const $otherform = document.querySelector('#othertaskformpopup').addEventListener('submit', (e) => {
    e.preventDefault();
  });
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
    assessmentDueDate,
    assessmentAddBtn,
    otherButton,
    otherTitle,
    otherDueDate,
    otherDescription,
    otherAddBtn,
    selectTaskBtn,
    cancelTaskBtn,
    cancelKdqolBtn,
    cancelPhq9Btn,
    cancelAssessmentBtn,
    cancelOtherBtn,
    newTaskItems,
    newKdqolItems,
    newPhq9Items,
    newAssessmentItems,
    newOtherItems,
    kdqolItems,
    phq9Items,
    assessmentItems,
    otherItems,
    $phq9form,
    $kdqolform,
    $assessmentform,
    $otherform,
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
