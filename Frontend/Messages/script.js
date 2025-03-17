function sendMessage() {
    var input = document.getElementById("chatInput");
    var chatBody = document.getElementById("chatBody");
    if (input.value.trim() !== "") {
        var newMessage = document.createElement("div");
        newMessage.textContent = input.value;
        newMessage.classList.add("message", "client-message");
        chatBody.appendChild(newMessage);
        input.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}