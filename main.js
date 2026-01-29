// Seleciona o formulário pelo ID
const form = document.getElementById("formulario");

// Seleciona o parágrafo onde a mensagem será exibida
const mensagem = document.getElementById("mensagem");

// Escuta o envio do formulário
form.addEventListener("submit", function (event) {

    // Impede o comportamento padrão (recarregar a página)
    event.preventDefault();

    // Seleciona os inputs
    const aInput = document.getElementById("a");
    const bInput = document.getElementById("b");

    // Converte os valores de string para número
    const a = Number(aInput.value);
    const b = Number(bInput.value);

    // Verifica se B é maior que A
    if (b > a) {
        mensagem.textContent = "B é maior que A."; // Texto exibido
        mensagem.style.color = "green";            // Cor verde
    } else {
        mensagem.textContent = "B não é maior que A."; // Texto exibido
        mensagem.style.color = "red";                  // Cor vermelha
    }

    // Mostra a mensagem
    mensagem.style.display = "block";

    // Centraliza o texto da mensagem
    mensagem.style.textAlign = "center";

    // Limpa os campos após o envio
    aInput.value = "";
    bInput.value = "";
});
