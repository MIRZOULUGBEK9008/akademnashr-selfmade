const elButton = document.querySelector('.js-menu'),
elNav = document.querySelector('.js-nav');

if (elButton) {
  elButton.addEventListener('click', function (){
    elNav.classList.toggle('sitenav__list-wrapper--open');
    document.body.classList.toggle('body--overflow')
  });

}