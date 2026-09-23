function verificarEstoque() {
  const estoque = 3;
  const quantidade = Number(document.getElementById("quantidade").value);
  const saida = document.getElementById("saida");

  if (quantidade <= estoque) {
    saida.className = "ok";
    saida.innerText = "✅ Quantidade disponível em estoque!";
  } else {
    saida.className = "no";
    saida.innerText = "❌ Estoque ultrapassado!";
  }
}

verificarEstoque();