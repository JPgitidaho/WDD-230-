document.addEventListener('DOMContentLoaded', function () {
    displayWelcomeMessage();
    storeVisitTimestamp();
  });
  
  function displayWelcomeMessage() {
    var lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp');
    if (!lastVisitTimestamp) {
      displayMessage("Welcome! Feel free to ask if you have any questions.");
    } else {
      var daysDifference = calculateDaysDifference(lastVisitTimestamp);
      if (daysDifference < 1) {
        displayMessage("Come back soon! Awesome!");
      } else {
        var message = "You were last visited " + daysDifference + " " + (daysDifference === 1 ? "day" : "days") + " ago.";
        displayMessage(message);
      }
    }
  }
  
  function calculateDaysDifference(lastVisitTimestamp) {
    var currentTimestamp = Date.now();
    var timeDifference = currentTimestamp - parseInt(lastVisitTimestamp);
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }
  
  function displayMessage(message) {
    document.getElementById('message-container').innerHTML = message;
  }
  
  function storeVisitTimestamp() {
    localStorage.setItem('lastVisitTimestamp', Date.now().toString());
  }
  