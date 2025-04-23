const actionArea = document.getElementById('action-area');

function showSpinnerThenButton() {
  // Replace button with spinner
  actionArea.innerHTML = '<div class="spinner"></div>';

  // After 2–3 seconds, replace spinner with button again
  setTimeout(() => {
    actionArea.innerHTML = '<button id="retry-button">Retry</button>';
    // Re-attach the event listener
    document.getElementById('retry-button').addEventListener('click', showSpinnerThenButton);
  }, 750); // You can change 2500 to 2000 or 3000 for different durations
}

// Attach initial event listener
document.getElementById('retry-button').addEventListener('click', showSpinnerThenButton);
