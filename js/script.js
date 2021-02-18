function menuMobile() {
  const bxMobile = document.querySelector('.bx');
  const navListMobile = document.querySelector('.nav-list');

  bxMobile.addEventListener('click', () => {
    bxMobile.classList.toggle('active');
    navListMobile.classList.toggle('active');
  });
}

menuMobile();
