const paragrafo = document.getElementById('sobreMim');
const textoCompleto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta asperiores consequuntur doloremque, minima veniam vel fuga,nihil, nisi nulla reprehenderit iusto vitae beatae enim corporis odio maiores molestias! Optio, omnis!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta asperiores consequuntur doloremque, minima veniam vel fuga,nihil, nisi nulla reprehenderit iusto vitae beatae enim corporis odio maiores molestias! Optio, omnis!";
let index = 0;

function escreverTexto() {
  if (index < textoCompleto.length) {
    paragrafo.textContent += textoCompleto.charAt(index);
    index++;
    setTimeout(escreverTexto, 5); // Ajuste o tempo entre as letras aqui (em milissegundos)
  }
}
escreverTexto();