function finalizarPedido() {
  const nome = document.getElementById("nome").value;
  const tamanho = document.getElementById("tamanho").value;
  const pagamento = document.querySelector('input[name="pagamento"]:checked').value;

  let adicionais = "";

  if (document.getElementById("fritas").checked) {
    adicionais += "Fritas, ";
  }
  if (document.getElementById("refrigerante").checked) {
    adicionais += "Refrigerante, ";
  }
  if (document.getElementById("sobremesa").checked) {
    adicionais += "Sobremesa, ";
  }

  if (adicionais === "") {
    adicionais = "Nenhum";
  } else {
    adicionais = adicionais.slice(0, -2);
  }

  document.getElementById("saida").innerText =
    "🍔 Resumo do pedido\n" +
    "Nome: " + nome + "\n" +
    "Tamanho: " + tamanho + "\n" +
    "Pagamento: " + pagamento + "\n" +
    "Adicionais: " + adicionais;
}