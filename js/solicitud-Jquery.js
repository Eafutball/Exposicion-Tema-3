// Función para hacer las cards donde se pondrá la info de cada personaje
const createCards = (character) =>{
    const cardsContainer = document.querySelector(".card-container")

    let card = document.createElement("div")
    card.className = "card"
    card.style.width = "18rem"

    let img = document.createElement("img")
    img.src = character.image
    img.className = "card-img-top"

    let cardBody = document.createElement("div")
    cardBody.className = "card-body"

    const title = document.createElement("h4")
    title.textContent = character.name

    const status = document.createElement("p")
    status.textContent = character.status
    status.className = "card-text"

    cardBody.append(title)
    cardBody.append(status)

    card.append(img)
    card.append(cardBody)

    cardsContainer.append(card)
} 

// Función para obtener los personajes
async function getCharacters() {
    try {
        $.ajax({
            url: "https://rickandmortyapi.com/api/character",
            method: "GET",
            success: function(characters) {
                // Imprimir para depuración
                console.log(characters.results);
                
                // Crear cards para cada personaje
                for (let i = 0; i < characters.results.length; i++) {
                    createCards(characters.results[i]);
                }
            },
            error: function(xhr, status, error) {
                console.error("Error en la solicitud AJAX: ", error);
            }
        });
    } catch (error) {
        console.error("Error en la función getCharacters: ", error);
    }
}

// Se llama a la función para obtener los personajes cuando se carga la página
$(document).ready(function() {
    getCharacters();
});

