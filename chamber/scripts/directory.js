const cardsContainer = document.querySelector('#cards');
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    const dateInfo = document.createElement('p');
    dateInfo.textContent = `${prophet.birthdate} - ${prophet.death}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(fullName);
    card.appendChild(dateInfo);
    card.appendChild(portrait);

    // Agrega la clase 'card' para aplicar estilos CSS
    card.classList.add('card');

    cardsContainer.appendChild(card);
  });
}

async function getProphetData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getProphetData();
