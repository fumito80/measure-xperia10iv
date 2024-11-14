document.body.style.zoom = '168.4%';

const divs = 150;

function initialize() {
  const $main = document.querySelector('.main');
  $main?.append(...[...Array(divs)].map(() => document.createElement('div')));
}

document.addEventListener('DOMContentLoaded', initialize);

// for PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then((registration) => {
      console.info('ServiceWorker registration successful with scope: ', registration.scope);
      registration.addEventListener('updatefound', () => {
        registration.update();
        console.info('PWA Registration update.');
      });
    })
    .catch((err) => console.info('ServiceWorker registration failed: ', err));
}
