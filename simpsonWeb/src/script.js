const hair = document.getElementById('hair');
const glasses = document.getElementById('glasses');
const shirt = document.getElementById('shirt');
const trousers = document.getElementById('trousers');

hair.onclick = () => {
  const avatarHair = document.getElementById('avatar-hair');
  const span = hair.getElementsByTagName('span')[0];

  if (avatarHair.style.display === 'none') {
    avatarHair.style.display = 'block';
    span.innerHTML = 'usuń';
  } else {
    avatarHair.style.display = 'none';
    span.innerHTML = 'dodaj';
  }
};

glasses.onclick = () => {
  const avatarGlasses = document.getElementById('avatar-glasses');
  const span = glasses.getElementsByTagName('span')[0];

  if (avatarGlasses.style.display === 'none') {
    avatarGlasses.style.display = 'block';
    span.innerHTML = 'usuń';
  } else {
    avatarGlasses.style.display = 'none';
    span.innerHTML = 'dodaj';
  }
};

shirt.onclick = () => {
  const avatarShirt = document.getElementById('avatar-shirt');
  const span = shirt.getElementsByTagName('span')[0];

  if (avatarShirt.style.display === 'none') {
    avatarShirt.style.display = 'block';
    span.innerHTML = 'usuń';
  } else {
    avatarShirt.style.display = 'none';
    span.innerHTML = 'dodaj';
  }
};

trousers.onclick = () => {
  const avatarTrousers = document.getElementById('avatar-trousers');
  const span = trousers.getElementsByTagName('span')[0];

  if (avatarTrousers.style.display === 'none') {
    avatarTrousers.style.display = 'block';
    span.innerHTML = 'usuń';
  } else {
    avatarTrousers.style.display = 'none';
    span.innerHTML = 'dodaj';
  }
};
