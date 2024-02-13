const zooms = {
  A202SO: '168.4%',
};

const divs = 150;

async function getModel() {
  return navigator.userAgentData.getHighEntropyValues(['model']);
}

function setZoom({ model }) {
  const zoom = zooms[model];
  if (!zoom) {
    throw new Error('This model is not supported.');
  }
  document.body.style.zoom = zoom;
}

function buildHtml() {
  const [$main] = document.getElementsByClassName('main');
  $main?.append(...[...Array(divs)].map(() => document.createElement('div')));
}

function showError(err) {
  document.body.textContent = err;
}

function main() {
  getModel()
    .then(setZoom)
    .then(buildHtml)
    .catch(showError);
}

document.addEventListener('DOMContentLoaded', main);
