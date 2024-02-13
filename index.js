const zooms = {
  A202SO: '168.4%',
};

const divs = 150;

async function setZoom() {
  const { model } = await navigator.userAgentData.getHighEntropyValues(['model']).catch(() => ({}));
  const zoom = zooms[model];
  if (!zoom) {
    return false;
  }
  document.body.style.zoom = zoom;
  return true;
}

async function initialize() {
  const supported = await setZoom();
  if (!supported) {
    document.body.textContent = 'This model is not supported.';
    return;
  }
  const [$main] = document.getElementsByClassName('main');
  $main?.append(...[...Array(divs)].map(() => document.createElement('div')));
}

document.addEventListener('DOMContentLoaded', initialize);
