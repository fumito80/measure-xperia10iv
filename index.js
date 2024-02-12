function $(selector, parent = document) {
  return parent.querySelector(selector);
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.zoom = '168.4%';
  const $main = $('.main');
  for (let i = 0; i < 150; i += 1) {
    const $div = $main.appendChild(document.createElement('div'));
    if (i % 10 === 0) {
      $div.classList.add('just');
      $div.setAttribute('title', Math.trunc(i / 10));
    } else if (i % 5 === 0) {
      $div.classList.add('half');
    }
  }
});
