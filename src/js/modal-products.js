(() => {
  const menuBtnRef = document.querySelector('[data-menu-button-1]');
  const mobileMenuRef = document.querySelector('[product-data-menu-1]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button-2]');
  const mobileMenuRef = document.querySelector('[product-data-menu-2]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button-3]');
  const mobileMenuRef = document.querySelector('[product-data-menu-3]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
