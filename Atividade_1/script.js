function mensagem() {
  let nome = document.getElementById("nome").value;
  document.getElementById("saida").innerText =
    nome ? "Olá, " + nome + "!" : "Digite seu nome.";
}

function limpar() {
  document.getElementById("nome").value = "";
  document.getElementById("saida").innerText = "";
}