// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the menu toggle checkbox and menu
    const menuToggle = document.querySelector('#menuToggle input');
    const menu = document.querySelector('#menu');

    // Add an event listener for the checkbox
    menuToggle.addEventListener('change', function() {
        // Check if the checkbox is checked
        if (menuToggle.checked) {
            // Show the menu
            menu.style.transform = 'translate(0, 0)';
        } else {
            // Hide the menu
            menu.style.transform = 'translate(-100%, 0)';
        }
    });
});
