function cadastrar() {
  const nome = document.getElementById("nome").value;
  const cidade = document.getElementById("cidade").value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  document.getElementById("saida").innerText =
    "Nome: " + nome + " | Cidade: " + cidade + " | Tipo: " + tipo;
}