const menuButton = document.querySelector('[data-catalogue-menu]');
const nav = document.querySelector('[data-catalogue-nav]');
const orderWrapper = document.querySelector('[data-order-dropdown]');
const orderToggle = document.querySelector('[data-order-toggle]');
const orderMenu = document.querySelector('[data-order-menu]');

const closeOrderMenu = () => {
  if (orderWrapper?.classList.contains('is-open')) {
    orderWrapper.classList.remove('is-open');
    orderToggle?.setAttribute('aria-expanded', 'false');
  }
};

const closeNavMenu = () => {
  if (nav?.classList.contains('is-open')) {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
};

menuButton?.addEventListener('click', () => {
  const willOpen = !nav.classList.contains('is-open');
  if (willOpen) {
    closeOrderMenu();
  }
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

orderToggle?.addEventListener('click', (e) => {
  e.stopPropagation();
  const willOpen = !orderWrapper.classList.contains('is-open');
  if (willOpen) {
    closeNavMenu();
  }
  const open = orderWrapper.classList.toggle('is-open');
  orderToggle.setAttribute('aria-expanded', String(open));
});

orderMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    closeOrderMenu();
  });
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  closeNavMenu();
}));

document.addEventListener('click', (e) => {
  if (orderWrapper && !orderWrapper.contains(e.target)) {
    closeOrderMenu();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeOrderMenu();
    closeNavMenu();
  }
});

const scrollToCatalogueHash = () => {
  if (!location.hash) return;
  const target = document.querySelector(location.hash);
  if (target?.classList.contains('catalogue-page')) {
    requestAnimationFrame(() => target.scrollIntoView());
  }
};

window.addEventListener('DOMContentLoaded', scrollToCatalogueHash);
window.addEventListener('hashchange', scrollToCatalogueHash);

