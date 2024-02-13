document.body.style.zoom = '168.4%';

const divs = 150;

function initialize() {
  const $main = document.querySelector('.main');
  $main?.append(...[...Array(divs)].map(() => document.createElement('div')));
}

document.addEventListener('DOMContentLoaded', initialize);
