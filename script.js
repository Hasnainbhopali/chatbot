// Chatbot functionality
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();

    if (!userInput) return; // Don't send empty messages

    // Display user message
    const chatBox = document.getElementById('chat-box');
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.textContent = userInput;
    chatBox.appendChild(userMessageDiv);

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulated bot response after delay
    setTimeout(() => {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('message', 'bot-message');
        botMessageDiv.textContent = "I'm a fake chat bot i can't help you bcz my developer is a beginner!";
        chatBox.appendChild(botMessageDiv);

        // Scroll to bottom after bot response
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
