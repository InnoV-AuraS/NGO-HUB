function save_message(msg){
    const data = {'msg': msg};

    fetch('http://127.0.0.1:8000/message_handler/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

function sendMessage() {
    var input = document.getElementById("chatInput");
    var chatBody = document.getElementById("chatBody");
    if (input.value.trim() !== "") {
        var newMessage = document.createElement("div");
        newMessage.textContent = input.value;
        newMessage.classList.add("message", "client-message");
        chatBody.appendChild(newMessage);
        save_message(input.value);
        input.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}