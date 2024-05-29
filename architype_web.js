//CHANGE THIS JAVASCRIPT FILE HOWEVER YOU NEED. REPLACE WITH GSAP ANIMATIONS AND SUCH. 

document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is running');

    // Select the element by its ID
    const element = document.getElementById('example-element');

    // Check if the element exists
    if (element) {
        // Add a click event listener
        element.addEventListener('click', () => {
            console.log('Element clicked');
            element.style.transition = 'transform 0.5s';
            element.style.transform = 'scale(1.5)';
        });
    }
});
