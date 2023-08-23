// redirect.js

// Function to navigate to a specified page
function navigateToPage(pageName) {
    // Use the chrome.tabs API to get the active tab's ID
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTabId = tabs[0].id;
      const newPageLink = tabs[0].url + pageName;
  
      // Update the URL of the active tab
      chrome.tabs.update(activeTabId, { url: newPageLink });
    });
  }
  