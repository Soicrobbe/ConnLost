const actionArea = document.getElementById('action-area');

const connGo = document.getElementById('connGo');
connGo.addEventListener('click', () => {
  window.location.href = 'Connection/index.html';
});

const blueGo = document.getElementById('blueGo');
blueGo.addEventListener('click', () => {
  window.location.href = 'Bluetooth/index.html';
});
