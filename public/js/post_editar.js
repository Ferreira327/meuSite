document.getElementById('updateVideoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(this); // Captura os dados do formulário

    fetch(`${this.action}`, {
        method: 'PUT',
        body: formData // Envia os dados do formulário
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/postAdmin';
            return response.json(); // Converte a resposta para JSON
        }
        throw new Error('Erro ao atualizar post.');
    })
    .then(data => {
        alert(data.message); // Mensagem de sucesso
        // Redireciona ou faz outras ações conforme necessário
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao atualizar post.');
    });
});