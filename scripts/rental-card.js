function convertCurrency() {
    var currency = document.getElementById("currency-selector").value;
    var currencySymbol = ""; // Variable para almacenar el símbolo de la moneda

    switch(currency) {
        case "eur":
            currencySymbol = "€";
            break;
        case "gbp":
            currencySymbol = "£";
            break;
        default:
            currencySymbol = "$"; 
    }

    // Realizar solicitud al archivo JSON
    fetch('./scripts/rentals.json')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        var rentalsContainer = document.getElementById('rentals');

        // Eliminar todas las tarjetas de alquiler existentes
        rentalsContainer.innerHTML = '';

        // Iterar sobre cada alquiler y mostrarlo
        data.rentals.forEach(rental => {
            // Crear la tarjeta de alquiler
            const rentalCard = document.createElement('div');
            rentalCard.classList.add('card');
            rentalCard.id = rental.rental_type; // Establecer el ID de la tarjeta

            // Calcular los precios en la moneda seleccionada
            var halfDayPrice, fullDayPrice;
            switch(currency) {
                case "eur":
                    halfDayPrice = rental.half_day_3_hrs.price_eur;
                    fullDayPrice = rental.full_day_price.price_full_day_eur;
                    break;
                case "gbp":
                    halfDayPrice = rental.half_day_3_hrs.price_gbp;
                    fullDayPrice = rental.full_day_price.price_full_day_gbp;
                    break;
                default:
                    halfDayPrice = rental.half_day_3_hrs.price;
                    fullDayPrice = rental.full_day_price.price_full_day;
            }

            // Agregar contenido a la tarjeta de alquiler
            rentalCard.innerHTML = `
            <section class="home-grid">
                <h2>${rental.name}</h2>
                <img src="${rental.img}" alt="${rental.name}">
                <button class="see"><a href="bookings.html">Rental Now</a></button>
                <p>Maximum persons: <i class="material-icons">person</i> ${rental.max_persons}</p>
                <p>Half day price (3 hours) with reservation: <span class="half-day-price">${currencySymbol} ${halfDayPrice}</span></p>
                <p>Full day price with reservation: <span class="full-day-price">${currencySymbol} ${fullDayPrice}</span></p>
            
                </section>`;

            // Agregar la tarjeta de alquiler al contenedor
            rentalsContainer.appendChild(rentalCard);
        });
    })
    .catch(error => console.error('Error loading JSON file:', error));
}

convertCurrency();
