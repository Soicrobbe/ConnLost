const actionArea = document.getElementById('action-area');

document.getElementById('retry-button').addEventListener('click', () => {
  // Replace button with spinner
  actionArea.innerHTML = '<div class="spinner"></div>';

  // After 2 seconds, bring back the button
  setTimeout(() => {
    actionArea.innerHTML = '<button id="retry-button">Retry</button>';
    // Re-attach the event listener
    document.getElementById('retry-button').addEventListener('click', arguments.callee);
  }, 2000);
});
