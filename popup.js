// popup.js

// Function to handle the button click
function handlePostSolution() {
    // This function is called when the "Post Solution" button is clicked
    console.log("Post Solution button clicked!");
    // Add your logic here to perform actions when the button is clicked
  }
  
  // Wait for the DOM to load
  document.addEventListener('DOMContentLoaded', function() {
    const postSolutionButton = document.getElementById('postSolutionButton');
  
    // Add a click event listener to the button
    postSolutionButton.addEventListener('click', handlePostSolution);
  });
  