// Correct passcode to access the prediction tool
const correctPasscode = '0420';

// Function to generate a weighted random number between 1.00 and 10.00
function generatePrediction() {
    let rand = Math.random();
    let prediction;

    if (rand < 0.7) {
        prediction = (Math.random() * 2.5 + 1.00).toFixed(2); // Between 1.00 and 3.50
    } else {
        prediction = (Math.random() * 6.5 + 3.50).toFixed(2); // Between 3.50 and 10.00
    }

    return prediction;
}

// Event listener for passcode submission
document.getElementById('submit-passcode').addEventListener('click', function() {
    const enteredPasscode = document.getElementById('passcode').value;
    
    if (enteredPasscode === correctPasscode) {
        // Hide password input and show the prediction section
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('prediction-container').style.display = 'block';
    } else {
        alert('Incorrect passcode! Please try again.');
    }
});

// Event listener for the prediction button
document.getElementById('predict-btn').addEventListener('click', function() {
    const prediction = generatePrediction();
    document.getElementById('prediction-result').innerText = `Predicted Number: ${prediction}`;
});

