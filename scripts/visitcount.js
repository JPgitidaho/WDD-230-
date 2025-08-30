document.addEventListener("DOMContentLoaded", function () {
   
    let visitCount = localStorage.getItem("visitCount");
  
   
    if (visitCount === null) {
      visitCount = 1;
    } else {
      visitCount = parseInt(visitCount) + 1;
    }

    document.getElementById("visit-counter").textContent = visitCount;
  
    localStorage.setItem("visitCount", visitCount.toString());
});
