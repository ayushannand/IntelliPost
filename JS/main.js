// content.js

// Function to navigate to the post-solution page
function navigateToPostSolutionPage() {
    const postSolutionLink = window.location.href + '/post-solution';
    window.location.href = postSolutionLink;
  }
  
  // Wait for the DOM to load
  document.addEventListener('DOMContentLoaded', function() {
    const postSolutionButton = document.getElementById('postSolutionButton');
  
    postSolutionButton.addEventListener('click', function() {
      // Change the name of the button to "abc"
      postSolutionButton.textContent = 'abc';
      
      // Navigate to the post-solution page
      navigateToPostSolutionPage();
    });
  });
  