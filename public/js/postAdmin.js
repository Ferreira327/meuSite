function deleteVideo(element,event) {
    const postId = element.getAttribute('data-id');
   
    event.preventDefault(); // Impede o comportamento padrão do link

    fetch(`/post/${postId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Vídeo removido com sucesso!');
            window.location.href = '/postAdmin'; // Redireciona para a página desejada
        } else {
            console.log(response)
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao remover vídeo.');
    });
}