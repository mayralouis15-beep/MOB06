function calcular() {
  const preco = 29;
  const qtd = Number(document.getElementById("quantidade").value);
  const total = preco * qtd;
  document.getElementById("saida").innerText =
    "Total: R$ " + total.toFixed(2).replace(".", ",");
}