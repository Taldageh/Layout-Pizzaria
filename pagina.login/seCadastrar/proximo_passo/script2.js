document.getElementById('form2').addEventListener('submit', (event) => {
   event.preventDefault(); // previne o envio padrão para validar primeiro

   const cep = document.getElementById('cep').value.trim();
   const bairro = document.getElementById('bairro').value.trim();
   const rua = document.getElementById('rua').value.trim();
    const numero = document.getElementById('numero').value.trim();

    if (!cep || !bairro || !rua || !numero) {
         alert('Por favor, preencha todos os campos.');
            return;
    }

    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length !== 8) {
       alert('CEP deve conter exatamente 8 números.');
       return;
    }

    if (isNaN(numero) || Number(numero) <= 0) {
        alert('Número deve ser um valor numérico positivo.');
        return;
    }
    alert('Cadastro fizalizado com sucesso!');
    window.location.href = '/pagina.login/login/index.html';
});
