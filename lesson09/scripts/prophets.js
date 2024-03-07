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

            // Añade la imagen a la tarjeta
            card.appendChild(image);

            // Añade la tarjeta al contenedor
            cardsContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getProphetData();
