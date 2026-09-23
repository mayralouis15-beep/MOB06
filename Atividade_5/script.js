function mostrarEndereco() {
  const selecionado = document.querySelector('input[name="endereco"]:checked');
  const saida = document.getElementById("saida");

  if (selecionado.value === "Casa") {
    saida.innerText = "📦 O pedido será entregue em sua casa.";
  } else if (selecionado.value === "Sítio") {
    saida.innerText = "📦 O pedido será entregue no sítio.";
  } else {
    saida.innerText = "📦 O pedido será entregue no trabalho.";
  }
}

mostrarEndereco();