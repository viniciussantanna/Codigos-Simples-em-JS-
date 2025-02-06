
// Ordena um array de objetos com base em uma propriedade.

function ordenarPorPropriedade(arr, propriedade, crescente = true) {
    return arr.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return crescente ? -1 : 1;
        }
        if (a[propriedade] > b[propriedade]) {
            return crescente ? 1 : -1;
        }
        return 0;
    });
}

// Exemplo de uso:
const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Ana", idade: 30 },
    { nome: "Carlos", idade: 22 },
    { nome: "Vinicius", idade: 26 },
];

console.log(ordenarPorPropriedade(pessoas, "idade")); // Ordenação crescente por idade