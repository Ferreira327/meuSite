
var quill = new Quill(editor, {
  // ...
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block'],
      [{ 'align': [] }],
      ['clean']
    ],
      imageResize: {
        displaySize: true,
        modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
      }
  },theme: 'snow' 
});

const formulario = document.querySelector('.formulario');
  const conteudoTextarea = document.getElementById('conteudo');

  formulario.addEventListener('submit', (event) => {
    conteudoTextarea.value = quill.root.innerHTML; // Insere o conteúdo do Quill no textarea
  });