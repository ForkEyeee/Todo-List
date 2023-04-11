const getValues = () => {
  const nameInput = document.getElementById('name-input').value;
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
