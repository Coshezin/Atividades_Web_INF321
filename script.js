const botoes = document.querySelectorAll(".btn-comprar");
const mensagemCarrinho = document.querySelector("#msg-carrinho");

botoes.forEach(botao => {
    botao.addEventListener("click", function() {
        mensagemCarrinho.classList.remove("oculto");
        mensagemCarrinho.classList.add("visivel");
        botao.classList.toggle("ativo");
    });
});

const btnBuscar = document.querySelector("#btn-buscar");
const inputBusca = document.querySelector("#input-busca");
const produtos = document.querySelectorAll(".produto");

btnBuscar.addEventListener("click", function() {
    const termo = inputBusca.value.toLowerCase();
    produtos.forEach(produto => {
        const texto = produto.querySelector("h3").textContent.toLowerCase();
        if (texto.includes(termo)) {
            produto.style.display = "block";
        }
        if (!texto.includes(termo)) {
            produto.style.display = "none";
        }
    });
});

const form = document.querySelector("#form-contato");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const msg = document.querySelector("#mensagem");

form.addEventListener("submit", function(event) {
    if (nome.value === "" || email.value === "" || msg.value === "") {
        event.preventDefault();
        alert("Os campos Nome, Email e Mensagem sao obrigatorios.");
    }
});