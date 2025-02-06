// Conta o número de palavras em uma string.

function contarPalavras(texto) {
    return texto.trim().split(/\s+/).length;
}

// Exemplo de uso:
console.log(contarPalavras("Olá, como você está?")); // 4
console.log(contarPalavras("Esse é um texto de exemplo.")); // 5