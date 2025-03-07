// Wait for the DOM to load before adding the event listener
document.addEventListener("DOMContentLoaded", function () {
    // Get the button element by its ID
    const button = document.getElementById('support-btn');

    // Add an event listener to the button
    button.addEventListener('click', function () {
        // Show a message when the button is clicked
        alert('Thank you for supporting the cause!');
        button.textContent = "Thank You for Your Support!";
        button.disabled = true;  // Disables the button after the click
        button.style.backgroundColor = "#a40000"; // Change the button color
    });
});
