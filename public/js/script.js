const paragrafo = document.getElementById('sobreMim');
const textoCompleto = "Sou estudante do 4º Período de Ciência da Computação na Universidade Federal de Lavras, onde já fui participante durante 1 ano da Empresa Júnior Comp Jr. Nela, fui responsalvel pelo desenvolvimento back-end, sendo o único nessa área do projeto do site da Juridica Jr. Também realizo Iniciação Científica, pela FAPEMIG, onde estou desenvolvendo uma ferramenta, resposável por gerenciar avalições de acessibilidade em sites da Web. Nesse projeto sou FullStack, e utilizo o framework Laravel, do PHP. Tenho mais conhecimento nas linguagens Python, PHP e JavaScript. No caso do Python, possuo habilidades em análise de dados, tendo um bom domínio da biblioteca Pandas.";
let index = 0;

function escreverTexto() {
  if (index < textoCompleto.length) {
    paragrafo.textContent += textoCompleto.charAt(index);
    index++;
    setTimeout(escreverTexto, 5); // Ajuste o tempo entre as letras aqui (em milissegundos)
  }
}
escreverTexto();