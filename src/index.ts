const zooms = {
  A202SO: '168.4%',
  default: '168.4%',
} as const;

const divs = 150;

async function getModel() {
  return navigator.userAgentData?.getHighEntropyValues(['model']);
}

function setZoom(uaDataValues: Awaited<ReturnType<typeof getModel>>) {
  const zoom = zooms[uaDataValues?.model as keyof typeof zooms] ?? zooms.default;
  if (!zoom) {
    throw new Error('This model is not supported.');
  }
  document.body.style.zoom = zoom;
}

function buildHtml() {
  const [$main] = document.getElementsByClassName('main');
  $main?.append(...[...Array(divs)].map(() => document.createElement('div')));
}

function showError(reason: any) {
  document.body.textContent = reason.message;
}

function main() {
  getModel()
    .then(setZoom)
    .then(buildHtml)
    .catch(showError);
}

document.addEventListener('DOMContentLoaded', main);

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
