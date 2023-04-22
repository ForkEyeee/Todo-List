const coll = document.getElementsByClassName('collapsible');

function toggleCollapsible(event) {
  const element = event.currentTarget;
  element.classList.toggle('active');
  const content = element.nextElementSibling;
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  }
}

for (let i = 0; i < coll.length; i += 1) {
  coll[i].addEventListener('click', toggleCollapsible);
}

export default toggleCollapsible;
