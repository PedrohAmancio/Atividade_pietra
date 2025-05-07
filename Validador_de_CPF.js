function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0, resto;// cria um avariável para armazenar a soma e o resto da divisão

    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);// multiplica o número pelo peso correspondente
    // Exemplo: para o primeiro dígito, multiplica por 10, depois por 9, e assim por diante
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0; // transforma o resto em 0 se for 10 ou 11 para fazer a validação
    if (resto !== parseInt(cpf.substring(9, 10))) return false;// verifica se o resto é igual ao dígito verificador
    // Exemplo: se o CPF for 123.456.789-00, verifica se o resto é igual a 0 com base nas variaveis criadas,somoa e resto

    soma = 0;// reinicia a soma para calcular o segundo dígito verificador

    // Validação do segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);// multiplica o número pelo peso correspondente segue o mesmo padrão da primeira validação, porem com outros numeros 
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

function verificarCPF() {// função para verificar o CPF digitado pelo usuário
    // Pega o valor do campo de entrada e o elemento de resultado
    const cpfInput = document.getElementById('cpf').value; 
    const resultado = document.getElementById('resultado');
    if (validarCPF(cpfInput)) { // chama a função validarCPF e verifica se o CPF é válido
        // Se o CPF for válido, exibe a mensagem de sucesso
        resultado.textContent = "CPF válido!";
        resultado.style.color = "green";
    } else { // Se nõ exibe a de erro 
        resultado.textContent = "CPF inválido!";
        resultado.style.color = "red";
    }
}