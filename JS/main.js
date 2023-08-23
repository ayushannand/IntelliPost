// Function to navigate to the post-solution page
function navigateToPostSolutionPage() {
  // Use the chrome.tabs API to get the active tab's ID
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTabId = tabs[0].id;
    const postSolutionLink = tabs[0].url + 'post-solution';

    // Update the URL of the active tab
    chrome.tabs.update(activeTabId, { url: postSolutionLink });
  });
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  const postSolutionButton = document.getElementById('postSolutionButton');

  postSolutionButton.addEventListener('click', function() {
    navigateToPostSolutionPage();
  });
});
