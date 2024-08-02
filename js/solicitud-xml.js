// Función para crear las tarjetas con la info de cada personaje
const createCards = (character) => {
    const cardsContainer = document.querySelector(".card-container");

    // Crear el contenedor de la tarjeta
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";

    // Crear y agregar la imagen
    const img = document.createElement("img");
    img.src = character.image;
    img.alt = `Image of ${character.name}`;
    img.className = "card-img-top";

    // Crear el cuerpo de la tarjeta
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Crear y agregar el título
    const title = document.createElement("h4");
    title.textContent = character.name;

    // Crear y agregar el estado
    const status = document.createElement("p");
    status.textContent = `Status: ${character.status}`;
    status.className = "card-text";

    // Construir la tarjeta
    cardBody.append(title);
    cardBody.append(status);
    card.append(img);
    card.append(cardBody);

    // Agregar la tarjeta al contenedor
    cardsContainer.append(card);
};

// Función para obtener los personajes con solicitud XMLHttpRequest
function getCharacters() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://rickandmortyapi.com/api/character");

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const characters = JSON.parse(xhr.responseText);
            characters.results.forEach(character => createCards(character));
            console.log(characters);
        } else {
            console.error("Error en la solicitud:", xhr.status, xhr.statusText);
        }
    };

    xhr.onerror = () => {
        console.error("Error en la solicitud AJAX.");
    };

    xhr.send();
}

// Llamar a la función para obtener los personajes cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
    getCharacters();
});
