// Función para convertir la moneda
function convertCurrency() {
    // Obtener la moneda seleccionada por el usuario
    var currency = document.getElementById("currency-selector").value;
    var currencySymbol = ""; // Variable para almacenar el símbolo de la moneda

    // Determinar el símbolo de la moneda según la elección del usuario
    switch(currency) {
        case "eur":
            currencySymbol = "€";
            break;
        case "gbp":
            currencySymbol = "£";
            break;
        default:
            currencySymbol = "$"; // Por defecto, símbolo de dólar para USD
    }

    // Obtener todos los elementos span que contienen los precios
    var prices = document.querySelectorAll(".price");

    // Iterar sobre cada precio y convertirlo a la moneda seleccionada
    prices.forEach(function(price) {
        var usdValue = parseFloat(price.getAttribute("data-usd")); // Obtener el valor en USD almacenado como atributo data-usd
        var originalUSDValue = parseFloat(price.getAttribute("data-original-usd")); // Obtener el valor original en USD almacenado como atributo data-original-usd
        var convertedValue;

        // Convertir a la moneda seleccionada
        switch(currency) {
            case "eur":
                convertedValue = usdValue * 0.85; // Tipo de cambio USD a EUR
                break;
            case "gbp":
                convertedValue = usdValue * 0.75; // Tipo de cambio USD a GBP
                break;
            case "usd":
                // Restaurar el valor original en dólares
                convertedValue = originalUSDValue;
                break;
            default:
                // Si la moneda seleccionada no es ninguna de las opciones anteriores,
                // se asumirá que se está volviendo a la moneda original (USD)
                convertedValue = usdValue;
        }

        // Concatenar el símbolo de la moneda con el valor convertido
        var convertedText = currencySymbol + convertedValue.toFixed(2); // Redondear a 2 decimales
        // Actualizar el texto del precio con el nuevo valor convertido
        price.textContent = convertedText;
    });
}




