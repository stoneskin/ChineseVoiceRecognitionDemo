// Get the input box and mic button elements
const inputBox = document.getElementById('input-box');
const micButton = document.getElementById('mic-button');
let isSpeaking = false;

// Create a SpeechRecognition object
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

// Set the recognition properties
//recognition.lang = 'en-US';
recognition.maxResults = 10;
recognition.interimResults = true;
recognition.lang = 'zh-CN'; // Change language to Chinese


// Define the speech-to-text function
function startSpeaking() {
    // Start the recognition
    recognition.start();

    // Set the mic button text to "Stop Speaking"
    micButton.textContent = 'Stop Speaking';

    // Set the input box placeholder to "Listening..."
    inputBox.placeholder = 'Listening...';

    // Set the isSpeaking flag to true
    isSpeaking = true;

    // Define the recognition event handlers
    recognition.onresult = (event) => {
        // Get the recognition results
        const results = event.results;

        // Loop through the results// Set the recognition properties


        for (let i = 0; i < results.length; i++) {
            // Get the current result
            const result = results[i];

            // If the result is final, add it to the input box
            if (result.isFinal) {
                inputBox.value += result[0].transcript;
            }
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event);
    };

    recognition.onend = () => {
        // Set the mic button text to "Start Speaking"
        micButton.textContent = 'Start Speaking';

        // Set the input box placeholder to "Speak to type..."
        inputBox.placeholder = 'Speak to type...';

        // Set the isSpeaking flag to false
        isSpeaking = false;
    };
}

// Add an event listener to the mic button
micButton.addEventListener('click', () => {
    // If the recognition is not started, start speaking
    if (!isSpeaking) {
        startSpeaking();
    } else {
        // Stop the recognition
        recognition.abort();
        isSpeaking = false;        
    }});


    // Get the read button element
const readButton = document.getElementById('read-button');

// Define the function to read the input box text
function readText() {
    const textToRead = inputBox.value; // Get the text from the input box
    if (textToRead) {
        const utterance = new SpeechSynthesisUtterance(textToRead); // Create a new speech utterance
        utterance.lang = 'zh-CN'; // Set language to Chinese (or 'en-US' for English)
        speechSynthesis.speak(utterance); // Speak the text
    } else {
        console.warn('No text to read.');
    }
}

// Add an event listener to the read button
readButton.addEventListener('click', readText);
