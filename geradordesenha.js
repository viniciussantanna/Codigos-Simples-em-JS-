
// Gera uma senha aleatória.

function gerarSenha(comprimento = 8) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }
    return senha;
}

// Exemplo de uso:
console.log(gerarSenha(10)); // Exemplo: "aB1$2cD3!f"