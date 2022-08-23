const elLoader = document.querySelector('.lds-dual-ring-wrapper'),
elButton = document.querySelector('.js-menu'),
elNav = document.querySelector('.js-nav'),
elOpen = document.querySelector('.js-open'),
elClose = document.querySelector('.js-close');


// Loader
document.addEventListener('DOMContentLoaded', function (){
  setTimeout(function(){
    elLoader.classList.add('lds-dual-ring-wrapper--none');
  }, 800);
});

// Navbar
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