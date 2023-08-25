const { hello } = require('../functions/hello.mjs');

function redirect() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTabId = tabs[0].id;
    const postSolutionLink = tabs[0].url + 'post-solution';
    chrome.tabs.update(activeTabId, { url: postSolutionLink });
  });
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  const postSolutionButton = document.getElementById('postSolutionButton');
  postSolutionButton.addEventListener('click', function() {
    redirect();

    console.log("Hii");
    console.log(hello());



  });
});
