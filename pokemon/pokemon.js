async function getAPIData(url) {
    try {
        const response = await fetch(url)
        return data 
    } catch (error) {
        console.error(error)
    }
    
}
getAPIData('https://pokeapi.co/api/v2/pokemon/25')//one example of syntax
.then((data) => {
    console.log(data)
    populationPokeCards(data)
})

const pokeGrid = document.querySelector('.pokeGrid')

function populationPokeCards(singlePokemon) {
    const pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    const pokeFront = document.createElement('div')
    pokeFront.className = 'cardFace front'
    pokeFront.textContent = 'Front'
    const pokeBack = document.createElement('div')
    pokeBack.className = 'back cardFace'
    pokeBack.textContent = 'Back'

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}