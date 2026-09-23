function processarPagamento() {
  const total = 100;
  const opcao = document.getElementById("pagamento").value;
  const saida = document.getElementById("saida");
  let valor;

  if (opcao === "pix") {
    valor = total * 0.95;
    saida.className = "pix";
  } else if (opcao === "cartao") {
    valor = total;
    saida.className = "cartao";
  } else {
    valor = total * 0.90;
    saida.className = "dinheiro";
  }

  saida.innerText = "Valor a pagar: R$ " + valor.toFixed(2).replace(".", ",");
}

processarPagamento();