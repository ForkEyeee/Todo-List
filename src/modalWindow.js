const modalWindowProject = () => {
  // Get the modal
  const modal = document.getElementById('myModal');
  // Get form
  const form = document.getElementById('form-div');
  // Get the button that opens the modal
  const btn = document.getElementById('addBtn');
  const btn2 = document.getElementById('add-todo');
  const submitButton = document.getElementById('submit');
  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = 'block';
  };
  // btn2.onclick = function () {
  //   modal.style.display = 'block';
  // };
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
    form.reset();
  };
  if (document.body.contains(btn2)) {
    btn2.onclick = function () {
      modal.style.display = 'block';
    };
  }

  // When user clicks submit
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

export { modalWindowProject };
