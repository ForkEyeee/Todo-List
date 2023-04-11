const getValues = () => {
  let nameInput = document.getElementById('name-input');
  nameInput = nameInput.value;
  const descInput = document.getElementById('desc-input').value;
  const dateInput = document.getElementById('date-input').value;
  const priorityInput = document.getElementById('priority-input').value;
  return {
    nameInput,
    descInput,
    dateInput,
    priorityInput,
  };
};

export { getValues };
