// script.js

// Function to handle click event for menu items
function handleMenuItemClick() {
    // Get all menu items
    var menuItems = document.querySelectorAll('.wrapper ul li a');
  
    // Add click event listener to each menu item
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('click', function () {
        // Get the checkbox input
        var checkbox = document.getElementById('active');
  
        // Uncheck the checkbox to hide the menu
        checkbox.checked = false;
      });
    });
  }
  
  // Call the function to handle menu item clicks
  handleMenuItemClick();
  