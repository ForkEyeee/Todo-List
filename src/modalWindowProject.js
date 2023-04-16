export default () => {
  // Get the modal
  const modal = document.getElementById('myModal');
  // Get form
  const form = document.getElementById('form-div');
  // Get the button that opens the modal
  const btn = document.getElementById('addBtn');
  // Get the button that submits the form
  const submitButton = document.getElementById('submit');
  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'block';
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
    form.reset();
  };

  // When user clicks submit, submit the data
  submitButton.onclick = function () {
    modal.style.display = 'none';
    form.reset();
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      form.reset();
    }
  };
};

