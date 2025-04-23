const actionArea = document.getElementById('action-area');
const connEcho = document.getElementById('connectEcho')
let hasRetriedOnce = false;

function showSpinnerThenButton() {
  actionArea.innerHTML = '<div class="spinner"></div>';

  setTimeout(() => {
    let html = '<button id="retry-button">Retry</button>';

    // Show "Proceed without connecting" if retry was done at least once
    if (hasRetriedOnce || !hasRetriedOnce) {
      html += '<br><br><button id="proceed-button">Proceed without connecting</button>';
    }

    hasRetriedOnce = true; // Ensure it gets shown from now on

    actionArea.innerHTML = html;
    connEcho.innerHTML = "Connection to Echo Failed";

    document.getElementById('retry-button').addEventListener('click', showSpinnerThenButton);

    const proceedButton = document.getElementById('proceed-button');
    if (proceedButton) {
      proceedButton.addEventListener('click', () => {
        window.location.href = 'language.html';
      });
    }
  }, 500);
}

// Initial setup
document.getElementById('retry-button').addEventListener('click', showSpinnerThenButton);
