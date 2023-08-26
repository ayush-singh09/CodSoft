// Get a reference to the h2 element
const display = document.querySelector(".display h2");

// Get all the calculator buttons
const buttons = document.querySelectorAll(".oper button");

// Load the previous calculation from local storage if available
const savedCalculation = localStorage.getItem("calculatorCalculation");
if (savedCalculation) {
    display.textContent = savedCalculation;
}

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        if (buttonValue === "C") {
            // Clear the display
            display.textContent = "";
        } else if (buttonValue === "= / ENTER") {
            try {
                // Evaluate and display the result
                display.textContent = eval(display.textContent);
            } catch (error) {
                // Handle calculation errors
                display.textContent = "Error";
            }
        } else if (buttonValue === "<-") {
            // Remove the last character
            display.textContent = display.textContent.slice(0, -1);
        } else {
            // Append the button value
            display.textContent += buttonValue;
        }

        // Store the current calculation in local storage
        localStorage.setItem("calculatorCalculation", display.textContent);
    });
});
