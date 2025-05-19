function validarCPF(cpf) {
    // Verifica se contém '.' ou '-'
    if (cpf.includes('.') || cpf.includes('-')) return false;

    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0, resto;

    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;

    // Validação do segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
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