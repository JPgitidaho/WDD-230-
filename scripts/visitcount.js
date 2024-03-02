document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the visit counter from localStorage
    let visitCount = localStorage.getItem("visitCount");
  
    // Check if it's the first visit or not
    if (visitCount === null) {
      visitCount = 1;
    } else {
      visitCount = parseInt(visitCount) + 1;
    }
  
    // Display the counter in the HTML element
    document.getElementById("visit-counter").textContent = visitCount;
  
    // Save the new counter value to localStorage
    localStorage.setItem("visitCount", visitCount.toString());
});
