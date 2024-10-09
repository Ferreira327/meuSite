function deleteVideo(element,event) {
    const videoId = element.getAttribute('data-id');
   
    event.preventDefault(); // Impede o comportamento padrão do link

    fetch(`/video/${videoId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Vídeo removido com sucesso!');
            window.location.href = '/home'; // Redireciona para a página desejada
        } else {
            console.log(response)
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao remover vídeo.');
    });
}