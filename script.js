document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const openBtn = document.querySelector('.burger-btn');
  const closeBtn = document.querySelector('.burger-menu-btn');

  console.log('burger:', burger);
  console.log('openBtn:', openBtn);
  console.log('closeBtn:', closeBtn);

  if (!burger || !openBtn || !closeBtn) {
    console.log('Щось не знайшлося по класу. Перевір назви класів у HTML.');
    return;
  }

  openBtn.addEventListener('click', () => {
    burger.classList.add('is-open');
  });

  closeBtn.addEventListener('click', () => {
    burger.classList.remove('is-open');
  });
});