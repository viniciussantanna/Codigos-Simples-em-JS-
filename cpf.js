// Valida um CPF e aplica a máscara padrão (XXX.XXX.XXX-XX).

function validarCpf(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
    
    if (cpf.length !== 11) {
        return "CPF inválido!";
    }

    // Validação dos 9 primeiros números
    let soma = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * peso;
        peso--;
    }

    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    soma = 0;
    peso = 11;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * peso;
        peso--;
    }

    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf[9]) === digito1 && parseInt(cpf[10]) === digito2) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Aplica a máscara
    }

    return "CPF inválido!";
}

// Exemplo de uso:
console.log(validarCpf("123.456.789-09")); // Resultado: CPF valido!
console.log(validarCpf("12345678909")); // Resultado: CPF valido!