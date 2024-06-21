document.addEventListener("DOMContentLoaded", function() {
    // Use vanilla JavaScript or use jQuery with noConflict mode if necessary
    var myModal = new bootstrap.Modal(document.getElementById('welcomeModal'), {
      keyboard: false
    });
    
    myModal.show();
    
    let basicClicked = false;
    let premiumClicked = false;
    let vipClicked = false;
    
    document.getElementById("basic-img").addEventListener("click", function() {
      basicClicked = true;
      checkIfAllClicked();
    });
    
    document.getElementById("premium-img").addEventListener("click", function() {
      premiumClicked = true;
      checkIfAllClicked();
    });
    
    document.getElementById("vip-img").addEventListener("click", function() {
      vipClicked = true;
      checkIfAllClicked();
    });
    
    function checkIfAllClicked() {
      if (basicClicked && premiumClicked && vipClicked) {
        alert("You must be signed in to access this feature.");
      }
    }
  });
  