
// Converte temperaturas entre Celsius, Fahrenheit e Kelvin.

function converterTemperatura(temperatura, de, para) {
    if (de === para) {
        return temperatura; // Se as unidades são iguais, retorna o mesmo valor
    }

    let tempEmCelsius;
    if (de === 'C') {
        tempEmCelsius = temperatura;
    } else if (de === 'F') {
        tempEmCelsius = (temperatura - 32) * 5 / 9;
    } else if (de === 'K') {
        tempEmCelsius = temperatura - 273.15;
    }

    if (para === 'C') {
        return tempEmCelsius;
    } else if (para === 'F') {
        return (tempEmCelsius * 9 / 5) + 32;
    } else if (para === 'K') {
        return tempEmCelsius + 273.15;
    }
}

// Exemplo de uso:
console.log(converterTemperatura(25, 'C', 'F')); // 77
console.log(converterTemperatura(77, 'F', 'C')); // 25
console.log(converterTemperatura(25, 'C', 'K')); // 298.15