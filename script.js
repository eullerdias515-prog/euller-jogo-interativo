let etapa = 0;

const desafios = [
"Desafio 1",
"Desafio 2",
"Desafio 3"
];

function intro() {
document.getElementById("tela").innerHTML = `
<h2>Início</h2>
<button onclick="mostrarDesafio()">Começar</button>
`;
}

function mostrarDesafio() {
if (etapa >= desafios.length) return final();

document.getElementById("tela").innerHTML = `
<h2>${desafios[etapa]}</h2>
<button onclick="escolha('lutar')">Lutar</button>
<button onclick="escolha('fugir')">Fugir</button>
`;
}

function escolha(acao) {
salvarEscolha(acao);

if (acao === "fugir") return finalRuim();

etapa++;
mostrarDesafio();
}

function final() {
document.getElementById("tela").innerHTML = "<h2>Você venceu!</h2>";
}

function finalRuim() {
document.getElementById("tela").innerHTML = "<h2>Você perdeu!</h2>";
}

function salvarEscolha(escolha) {
fetch("http://localhost:3000/salvar", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ escolha, etapa })
});
}

intro();