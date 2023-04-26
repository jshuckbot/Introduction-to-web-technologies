function convertCelsiusToFahrenheit(temperature) {
    return  Math.round((1.8 * temperature + 32) * 100) / 100
}

const temperatureCelsius = Number.parseFloat(prompt('Введите температуру в градусах Цельсия'))
const temperatureFahrenheit = convertCelsiusToFahrenheit(temperatureCelsius)

alert(`Цельсий: ${temperatureCelsius} Фаренгейт: ${temperatureFahrenheit}`)