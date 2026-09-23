let numero = 1;

function atualizar() {
  const imagem = document.getElementById("imagem");
  const titulo = document.getElementById("titulo");

  if (numero === 1) {
    imagem.src = "https://picsum.photos/id/1015/500/300";
    titulo.innerText = "Paisagem 1";
  } else if (numero === 2) {
    imagem.src = "https://picsum.photos/id/1016/500/300";
    titulo.innerText = "Paisagem 2";
  } else {
    imagem.src = "https://picsum.photos/id/1018/500/300";
    titulo.innerText = "Paisagem 3";
  }
}

function proxima() {
  numero++;
  if (numero > 3) {
    numero = 1;
  }
  atualizar();
}

function anterior() {
  numero--;
  if (numero < 1) {
    numero = 3;
  }
  atualizar();
}