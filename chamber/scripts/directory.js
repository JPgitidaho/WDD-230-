// Selector para el contenedor de tarjetas
const cardsContainer = document.querySelector('#cards');

// Función asincrónica para obtener y mostrar los datos de los miembros
async function getMemberData() {
    try {
        // Fetch para obtener el archivo JSON
        const response = await fetch('https://raw.githubusercontent.com/JPgitidaho/WDD-230-/main/chamber/scripts/directory.json');
        const data = await response.json();

        // Itera sobre los miembros y crea las tarjetas
        data.members.forEach(member => {
            // Crea un elemento div para la tarjeta
            const card = document.createElement('div');
            card.classList.add('card'); // Añade la clase 'card' para aplicar estilos

            // Crea la imagen del miembro
            const image = document.createElement('img');
            image.src = member.image;
            image.alt = `${member.name} Logo`;
            image.loading = 'lazy';
            image.width = 100;
            image.height = 70;

            // Añade la imagen a la tarjeta
            card.appendChild(image);

            // Crea un elemento h2 para el nombre del miembro
            const name = document.createElement('h2');
            name.textContent = member.name;

            // Añade el nombre a la tarjeta
            card.appendChild(name);

            // Añade la tarjeta al contenedor de tarjetas
            cardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Llama a la función para obtener y mostrar los datos de los miembros
    getMemberData();
});
