// Function to remove popups
function removePopups() {
  // Remove elements with class "simple-popup ember-view pw-pop"
  const popups = document.getElementsByClassName('simple-popup ember-view pw-pop');
  for (let i = popups.length - 1; i >= 0; i--) {
    popups[i].remove();
  }

  // Remove elements with id starting with "ember" and having the specific class
  const emberElements = document.querySelectorAll('[id^="ember"]');
  emberElements.forEach(element => {
    if (element.classList.contains('simple-popup') && 
        element.classList.contains('ember-view') && 
        element.classList.contains('pw-pop')) {
      element.remove();
    }
  });
}

// Run immediately when the page loads
removePopups();

// Set up a mutation observer to handle dynamically added popups
const observer = new MutationObserver(function(mutations) {
  removePopups();
});

// Start observing the document with the configured parameters
observer.observe(document.body, { 
  childList: true,
  subtree: true
});
