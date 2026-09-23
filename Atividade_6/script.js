function cadastrar() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const cidade = document.getElementById("cidade").value;

  document.getElementById("saida").innerText =
    "Nome: " + nome + " | Idade: " + idade + " | Cidade: " + cidade;
}