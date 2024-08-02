//Función para hacer las cards donde se pondrá la info de cada personaje *
  getCharacters = async()=>{
    try {
        let res = await fetch("https://rickandmortyapi.com/api/character")
        let characters = await res.json()
        for (let i = 0; i < characters.results.length; i++) {
            createCards(characters.results[i])            
        }
        console.log(characters)
    } catch (error) {
        console.error(error)
    }
  }

//Función para obtener los personajes *
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


//Llamado de la función
getCharacters()
