const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cardsContainer = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Itera sobre los profetas y crea las tarjetas
        data.prophets.forEach(prophet => {
            const card = document.createElement('div');
            card.classList.add('card');

            // Crea la imagen
            const image = document.createElement('img');
            image.src = prophet.imageurl;
            image.alt = `${prophet.name} ${prophet.lastname}`;

            // Crea un elemento de encabezado h2 para el nombre
            const nameHeader = document.createElement('h2');
            nameHeader.textContent = `${prophet.name} ${prophet.lastname}`;

            // Crea un párrafo para la información de fecha de nacimiento y muerte
            const dateInfo = document.createElement('p');
            dateInfo.textContent = `${prophet.birthdate} - ${prophet.death}`;

            // Añade la imagen, el nombre y la información de fecha a la tarjeta
            card.appendChild(image);
            card.appendChild(nameHeader);
            card.appendChild(dateInfo);

            // Añade la tarjeta al contenedor
            cardsContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getProphetData();
