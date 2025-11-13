document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const openBtn = document.querySelector('.burger-btn');
  const closeBtn = document.querySelector('.burger-menu-btn');



  openBtn.addEventListener('click', () => {
    burger.classList.add('is-open');
  });

  closeBtn.addEventListener('click', () => {
    burger.classList.remove('is-open');
  });
});
 const a = '12l'
const nuUser = 12
console.log(nuUser=== a)