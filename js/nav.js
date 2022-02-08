const navToggle = document.querySelector('.menu-knop');

navToggle.addEventListener('click', () => {
  if (screen.width < '1000') {
    document.body.classList.toggle('nav-is-open-mobile');
  } else {
    document.body.classList.toggle('nav-is-open-desktop');
  }
  console.log(screen.width);
});