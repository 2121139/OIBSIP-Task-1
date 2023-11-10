// Get the input element and buttons
const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

// Initialize the input string
let string = '';

// Convert the NodeList of buttons to an array
const buttonArray = Array.from(buttons);

// Attach click event listeners to each button
buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        // Handle different button actions
        if (buttonText === '=') {
            // Evaluate the expression and update the input value
            try {
                // Replace the % symbol with / 100 and then evaluate the expression
                string = string.replace(/%/g, '/100');
                string = eval(string);
                input.value = string;
            } catch (error) {
                // Handle evaluation errors, e.g., division by zero
                input.value = 'Error';
                string = '';
            }
        } 
        
        else if (buttonText === 'AC') {
            // Clear the input and the string
            string = '';
            input.value = '';
        } 
        
        else if (buttonText === 'DEL') {
            // Remove the last character from the string and update the input value
            string = string.slice(0, -1);
            input.value = string;
        } 
        
        else {
            // Append the button's text to the input string and update the input value
            string += buttonText;
            input.value = string;
        }
    });
});
