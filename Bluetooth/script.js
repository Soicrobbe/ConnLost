const actionArea = document.getElementById('action-area');
let hasRetriedOnce = false;

function showSpinnerThenButton() {
  // Replace Retry button with spinner
  actionArea.innerHTML = '<div class="spinner"></div>';

  // After 2.5 seconds, show Retry button again (and Help if applicable)
  setTimeout(() => {
    let html = '<button id="retry-button">Retry</button>';

    // If this is the first retry completed, add the new button
    if (!hasRetriedOnce) {
      hasRetriedOnce = true;
      html += '<br><br><button id="help-button">Help</button>';
    }

    actionArea.innerHTML = html;

    // Reattach the Retry click handler
    document.getElementById('retry-button').addEventListener('click', showSpinnerThenButton);

    // Optional: add a handler for the Help button if needed
    const helpButton = document.getElementById('help-button');
    if (helpButton) {
      helpButton.addEventListener('click', () => {
        alert("Help is on the way! 🚑");
      });
    }
  }, 2500);
}

// Attach initial listener
document.getElementById('retry-button').addEventListener('click', showSpinnerThenButton);
