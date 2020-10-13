const hair = document.getElementById('hair');
const glasses = document.getElementById('glasses');
const shirt = document.getElementById('shirt');
const trousers = document.getElementById('trousers');

hair.onclick = () => changeItem(hair);
glasses.onclick = () => changeItem(glasses);
shirt.onclick = () => changeItem(shirt);
trousers.onclick = () => changeItem(trousers);

const changeItem = (item) => {
  const element = document.getElementById('avatar-' + item.id);
  const span = item.getElementsByTagName('span')[0];

  if (element.style.display === 'none') {
    element.style.display = 'block';
    span.innerHtlm = 'usuń';
  } else {
    element.style.display = 'none';
    span.innerHtml = 'dodaj';
  }
};
