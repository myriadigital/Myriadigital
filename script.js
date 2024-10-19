// Função para abrir o chat
function openChat() {
    document.getElementById("chatbox").style.display = "block";
}

// Função para fechar o chat
function closeChat() {
    document.getElementById("chatbox").style.display = "none";
}

// Função para enviar a mensagem
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Exibir mensagem do usuário
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.innerText = userInput;
    document.getElementById("chat-body").appendChild(userMessage);

    // Resposta automática
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    
    let response = "Desculpe, não entendi. Tente perguntar outra coisa.";

    if (userInput.toLowerCase().includes("serviço")) {
        response = "Oferecemos serviços de audiovisual e marketing. Quer fazer um orçamento?";
    } else if (userInput.toLowerCase().includes("contato")) {
        response = "Você pode entrar em contato pelo WhatsApp ou e-mail clicando nos links na seção de contato!";
    }

    botMessage.innerText = response;
    document.getElementById("chat-body").appendChild(botMessage);

    // Limpar o campo de entrada
    document.getElementById("user-input").value = "";

    // Rolagem automática para a última mensagem
    document.getElementById("chat-body").scrollTop = document.getElementById("chat-body").scrollHeight;
}
