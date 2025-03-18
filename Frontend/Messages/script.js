function sendMessage() {
    let inputField = document.getElementById("chatInput");
    let message = inputField.value.trim();
    if (message === "") return;
    
    let chatBody = document.getElementById("chatBody");
    
    let userMessage = document.createElement("div");
    userMessage.textContent = "You: " + message;
    userMessage.style.padding = "5px";
    userMessage.style.margin = "5px 0";
    userMessage.style.background = "#d1e7ff";
    userMessage.style.borderRadius = "5px";
    chatBody.appendChild(userMessage);
    
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.textContent = "Bot: Hello! How can I help you?";
        botMessage.style.padding = "5px";
        botMessage.style.margin = "5px 0";
        botMessage.style.background = "#f1f1f1";
        botMessage.style.borderRadius = "5px";
        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
    
    inputField.value = "";
}