function startAnimation() {
  const box = document.getElementById('box');
  box.classList.toggle('animate');
}

function saveState() {
  const isAnimated = document.getElementById('box').classList.contains('animate');
  localStorage.setItem('boxAnimated', isAnimated);
  alert('State saved!');
}

function loadState() {
  const isAnimated = localStorage.getItem('boxAnimated') === 'true';
  const box = document.getElementById('box');
  box.classList.toggle('animate', isAnimated);
  alert('State loaded!');
}
