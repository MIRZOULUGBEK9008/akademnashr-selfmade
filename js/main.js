const elButton = document.querySelector('.js-menu'),
elNav = document.querySelector('.js-nav'),
elOpen = document.querySelector('.js-open'),
elClose = document.querySelector('.js-close');

if (elButton) {
  elButton.addEventListener('click', function (){
    elNav.classList.toggle('sitenav__list-wrapper--open');
    document.body.classList.toggle('body--overflow');
    elOpen.classList
    .toggle('menu__img-open--block')
    elClose.classList
    .toggle('menu__img-close--block')
  });

}