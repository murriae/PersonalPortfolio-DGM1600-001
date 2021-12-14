import { removeChildren } from "../utils/index.js"

function getAPIData(url) {
  try {
    return fetch(url).then((data) => data.json())
  } catch (error) {
    console.error(error)
  }
}

function loadPokemon(offset = 0, limit = 49) {
  getAPIData(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  ).then(async (data) => {
    console.log(data.results)
    for (const pokemon of data.results) {
      await getAPIData(pokemon.url).then((pokeData) =>
        populatePokeCards(pokeData)
      )
    }
  })
}

const allPokemon = getAllSimplePokemon()

function getAllSimplePokemon() {
  const allPokemon = []
  getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0`).then(
    async (data) => {
      console.log(data.results.length)
      for (const pokemon of data.results) {
        await getAPIData(pokemon.url).then((pokeData) => {
          const mappedPokemon = {
            abilities: pokeData.abilities,
            height: pokeData.height,
            id: pokeData.id,
            name: pokeData.name,
            types: pokeData.types,
            weight: pokeData.weight,
          }
          allPokemon.push(mappedPokemon)
        })
      }
    }
  )
  return allPokemon
}

function getAllPokemonByType(type) {
  return allPokemon.filter((pokemon) => pokemon.types[0].type.name === type)
}

const chooseButton = document.querySelector(".choosePokemon")

chooseButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  let id = prompt("What is the ID of your Pokemon?")
  getAPIData(`https://pokeapi.co/api/v2/pokemon/${id}`).then((chosen) =>
    populatePokeCards(chosen)
  )
})

const pokeGrid = document.querySelector(".pokeGrid")
const loadButton = document.querySelector(".loadPokemon")
loadButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  loadPokemon()
})

const newButton = document.querySelector(".newPokemon")
newButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  let pokeName = prompt("What is the name of your Pokemon?")
  let pokeHeight = prompt("How many feet tall is your Pokemon?")
  let pokeWeight = prompt("How many kilograms is your Pokemon?")
  let pokeAbilities = prompt(
    "What abilities does your Pokemon have? (use a comma separated list)"
  )
  let pokeType = prompt(
    "What type is your Pokemon? grass, fire, water, bug, etc. (Choose one, lowercase, space separator)"
  )

  let newPokemon = new Pokemon(
    pokeName,
    pokeHeight,
    pokeWeight,
    getAbilitiesArray(pokeAbilities),
    getTypesArray(pokeType)
  )
  console.log(newPokemon)
  populatePokeCards(newPokemon)
})

function getAbilitiesArray(commaString) {
  let tempArray = commaString.split(",")
  console.log(tempArray)
  return tempArray.map((abilityName) => {
    return {
      ability: {
        name: abilityName,
      },
    }
  })
}

function getTypesArray(spacedString) {
  let tempArray = spacedString.split(" ")
  return tempArray.map((typeName) => {
    return {
      type: {
        name: typeName,
      },
    }
  })
}

const morePokemon = document.querySelector(".morePokemon")
morePokemon.addEventListener("click", () => {
  let startPoint = prompt("Which pokemon ID do you want to start with?")
  let howMany = prompt("How many more pokemon do you want to see?")
  loadPokemon(startPoint, howMany)
})

const grassButton = document.querySelector(".grassButton")
grassButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("grass")
  allByType.forEach((item) => populatePokeCards(item))
})

const fireButton = document.querySelector(".fireButton")
fireButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("fire")
  allByType.forEach((item) => populatePokeCards(item))
})

const waterButton = document.querySelector(".waterButton")
waterButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("water")
  allByType.forEach((item) => populatePokeCards(item))
})

const bugButton = document.querySelector(".bugButton")
bugButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("bug")
  allByType.forEach((item) => populatePokeCards(item))
})

const normalButton = document.querySelector(".normalButton")
normalButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("normal")
  allByType.forEach((item) => populatePokeCards(item))
})

const flyingButton = document.querySelector(".flyingButton")
flyingButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("flying")
  allByType.forEach((item) => populatePokeCards(item))
})

const poisonButton = document.querySelector(".poisonButton")
poisonButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("poison")
  allByType.forEach((item) => populatePokeCards(item))
})

const electricButton = document.querySelector(".electricButton")
electricButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("electric")
  allByType.forEach((item) => populatePokeCards(item))
})

const ghostButton = document.querySelector(".ghostButton")
ghostButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("ghost")
  allByType.forEach((item) => populatePokeCards(item))
})

const psychicButton = document.querySelector(".psychicButton")
psychicButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("psychic")
  allByType.forEach((item) => populatePokeCards(item))
})

const groundButton = document.querySelector(".groundButton")
groundButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("ground")
  allByType.forEach((item) => populatePokeCards(item))
})

const rockButton = document.querySelector(".rockButton")
rockButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("rock")
  allByType.forEach((item) => populatePokeCards(item))
})

const iceButton = document.querySelector(".iceButton")
iceButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("ice")
  allByType.forEach((item) => populatePokeCards(item))
})

const fightingButton = document.querySelector(".fightingButton")
fightingButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("fighting")
  allByType.forEach((item) => populatePokeCards(item))
})

const dragonButton = document.querySelector(".dragonButton")
dragonButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("dragon")
  allByType.forEach((item) => populatePokeCards(item))
})

const darkButton = document.querySelector(".darkButton")
darkButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("dark")
  allByType.forEach((item) => populatePokeCards(item))
})

const steelButton = document.querySelector(".steelButton")
steelButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("steel")
  allByType.forEach((item) => populatePokeCards(item))
})

const fairyButton = document.querySelector(".fairyButton")
fairyButton.addEventListener("click", () => {
  removeChildren(pokeGrid)
  const allByType = getAllPokemonByType("fairy")
  allByType.forEach((item) => populatePokeCards(item))
})

function populatePokeCards(singlePokemon) {
  const pokeScene = document.createElement("div")
  pokeScene.className = "scene"
  const pokeCard = document.createElement("div")
  pokeCard.className = "card"
  pokeCard.addEventListener("click", () => {
    pokeCard.classList.toggle("is-flipped")
  })

  const cardFacefront = populateCardFront(singlePokemon)
  const cardFaceback = populateCardBack(singlePokemon)

  pokeCard.appendChild(cardFacefront)
  pokeCard.appendChild(cardFaceback)
  pokeScene.appendChild(pokeCard)
  pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
  const pokeFront = document.createElement("figure")
  pokeFront.className = "cardFace front"
  const pokeImg = document.createElement("img")
  if (pokemon.id === 9001) {
    pokeImg.src = "../Images/pokeBall.png"
  } else {
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  }
  const pokeCaption = document.createElement("figcaption")
  pokeCaption.textContent = `${pokemon.name}`

  const pokeID = document.createElement('h4')
  pokeID.textContent = `ID: ${pokemon.id}`
  
  pokeFront.appendChild(pokeID)
  pokeFront.appendChild(pokeImg)
  pokeFront.appendChild(pokeCaption)

  typesBackground(pokemon, pokeFront)
  return pokeFront
}

function typesBackground(pokemon, card) {
  let pokeType1 = pokemon.types[0].type.name
  let pokeType2 = pokemon.types[1]?.type.name
  if (!pokeType2) {
    card.style.setProperty("background", getPokeTypeColor(pokeType1))
  } else {
    card.style.setProperty(
      "background",
      `linear-gradient(${getPokeTypeColor(pokeType1)}, ${getPokeTypeColor(
        pokeType2
      )})`
    )
  }
}

function populateCardBack(pokemon) {
  const pokeBack = document.createElement("div")
  pokeBack.className = "cardFace back"

  const label = document.createElement("h4")
  label.textContent = "Abilities:"
  const abilityList = document.createElement("ul")
  pokemon.abilities.forEach((abilityItem) => {
    let listItem = document.createElement("li")
    listItem.textContent = abilityItem.ability.name
    abilityList.appendChild(listItem)
  })

  const labelT = document.createElement("h4")
  labelT.textContent = "Type:"
  const pokeTypes = document.createElement("ol")
  pokemon.types.forEach((pokeType) => {
    let typeItem = document.createElement("li")
    typeItem.textContent = pokeType.type.name
    pokeTypes.appendChild(typeItem)
  })

  if (pokemon.stats) {
    const pokeHP = document.createElement('h4')
    pokeHP.textContent = `HP: ${pokemon.stats[0].base_stat}`
    pokeBack.appendChild(pokeHP)
  }

  const pokeHeight = document.createElement('h4')
  pokeHeight.textContent = `Height: ${pokemon.height}`

  const pokeWeight = document.createElement('h4')
  pokeWeight.textContent = `Weight: ${pokemon.weight}`

  pokeBack.appendChild(pokeHeight)
  pokeBack.appendChild(pokeWeight)
  pokeBack.appendChild(label)
  pokeBack.appendChild(abilityList)
  pokeBack.appendChild(labelT)
  pokeBack.appendChild(pokeTypes)

  typesBackground(pokemon, pokeBack)
  return pokeBack
}

class Pokemon {
  constructor(name, height, weight, abilities, types) {
    ;(this.id = 9001),
      (this.name = name),
      (this.height = height),
      (this.weight = weight),
      (this.abilities = abilities),
      (this.types = types)
  }
}

function getPokeTypeColor(pokeType) {
  let color
  switch (pokeType) {
    case "grass":
      color = "#00ff00"
      break
    case "fire":
      color = "#ff0000"
      break
    case "water":
      color = "#0000ff"
      break
    case "bug":
      color = "#C6D16E"
      break
    case "normal":
      color = "#f5f5dc"
      break
    case "flying":
      color = "#00ffff"
      break
    case "poison":
      color = "#c300ff"
      break
    case "electric":
      color = "#c8ff00"
      break
    case "ghost":
      color = "#735797"
      break
    case "psychic":
      color = "#e96c95"
      break
    case "ground":
      color = "#ceb250"
      break
    case "rock":
      color = "#444444"
      break
    case "ice":
      color = "#96D9D6"
      break
    case "fighting":
      color = "#C03028"
      break
    case "dragon":
      color = "#7038F8"
      break
    case "dark":
      color = "	#705848"
      break
    case "steel":
      color = "#787887"
      break
    case "fairy":
      color = "#EE99AC"
      break
    default:
      color = "#999999"
  }
  return color
}



/* import { removeChildren } from '../utils/index.js'

function getAPIData(url) {
  try {
    return fetch(url).then((data) => data.json())
  } catch (error) {
    console.error(error)
  }
}

 option1: get a pokemon by id or name
 first, prompt the user for the name or id of the pokemon
 second, use the getAPIData function and pass it a url like
 `https://pokeapi.co/api/v2/pokemon/${promptResult}` 
 third, populatePokeCard with the returned pokemon data


function loadPokemon(offset = 100, limit = 25) {
  getAPIData(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
  ).then(async (data) => {
    for (const pokemon of data.results) {
      await getAPIData(pokemon.url).then((pokeData) =>
        populatePokeCard(pokeData),
      )
    }
  })
}

const pokeGrid = document.querySelector('.pokeGrid')
const loadButton = document.querySelector('.loadPokemon')
loadButton.addEventListener('click', () => {
  removeChildren(pokeGrid)
  loadPokemon()
})
const newButton = document.querySelector('.newPokemon')
newButton.addEventListener('click', () => {
  let pokeName = prompt('What is the name of your new Pokemon?')
  let pokeHeight = prompt('What is the height of your Pokemon?')
  let pokeAbilities = prompt(
    'What are your Pokemon abilities? (use a comma separated list',
  )
  let newPokemon = new Pokemon(
    pokeName,
    pokeHeight,
    3785,
    getAbilitiesArray(pokeAbilities),
  )
  console.log(newPokemon)
  populatePokeCard(newPokemon)
})

const morePokemon = document.querySelector('.morePokemon')
morePokemon.addEventListener('click', () => {
  let startPoint = prompt('Which pokemon ID do we start with?')
  let howMany = prompt('How many more Pokemon do you want to see?')
  loadPokemon(startPoint, howMany)
})

function getAbilitiesArray(commaString) {
  let tempArray = commaString.split(',')
  console.log(tempArray)
  return tempArray.map((abilityName) => {
    return {
      ability: {
        name: abilityName,
      },
    }
  })
}

function populatePokeCard(singlePokemon) {
  const pokeScene = document.createElement('div')
  pokeScene.className = 'scene'
  const pokeCard = document.createElement('div')
  pokeCard.className = 'card'
  pokeCard.addEventListener('click', () =>
    pokeCard.classList.toggle('is-flipped'),
  )
  const front = populateCardFront(singlePokemon)
  const back = populateCardBack(singlePokemon)

  pokeCard.appendChild(front)
  pokeCard.appendChild(back)
  pokeScene.appendChild(pokeCard)
  pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
  const pokeFront = document.createElement('figure')
  pokeFront.className = 'cardFace front'
  const pokeImg = document.createElement('img')
  if (pokemon.id === 9001) {
    pokeImg.src = '../images/pokeball.png'
  } else {
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  }
  const pokeCaption = document.createElement('figcaption')
  pokeCaption.textContent = `${pokemon.name}`
  pokeFront.appendChild(pokeImg)
  pokeFront.appendChild(pokeCaption)

  typesBackground(pokemon, pokeFront)

  return pokeFront
}

function typesBackground(pokemon, card) {
  let pokeType1 = pokemon.types[0].type.name
  let pokeType2 = pokemon.types[1]?.type.name
  if (!pokeType2) {
    card.style.setProperty('background', getPokeTypeColor(pokeType1))
  } else {
    card.style.setProperty('background',
    `linear-gradient(${getPokeTypeColor(pokeType1)}, ${getPokeTypeColor(pokeType2)})`)
  }
}

function populateCardBack(pokemon) {
  const pokeBack = document.createElement('div')
  pokeBack.className = 'cardFace back'
  const label = document.createElement('h4')
  label.textContent = 'Abilities:'
  const abilityList = document.createElement('ul')
  pokemon.abilities.forEach((ability) => {
    let abilityItem = document.createElement('li')
    abilityItem.textContent = ability.ability.name
    abilityList.appendChild(abilityItem)
  })
  const pokeTypes = document.createElement('ol')
  pokemon.types.forEach((pokeType) => {
    let typeItem = document.createElement('li')
    typeItem.textContent = pokeType.type.name
    pokeTypes.appendChild(typeItem)
  })
  pokeBack.appendChild(label)
  pokeBack.appendChild(abilityList)
  pokeBack.appendChild(pokeTypes)
  return pokeBack
}

class Pokemon {
  constructor(name, height, weight, abilities) {
    ;(this.id = 9001),
      (this.name = name),
      (this.height = height),
      (this.weight = weight),
      (this.abilities = abilities)
  }
}

function getPokeTypeColor(pokeType) {
  let color
  switch (pokeType) {
    case 'grass':
      color = '#00ff00'
      break
      case 'fire':
      color = '#ff0000'
      break
      case 'water':
      color = '#0000ff'
      break
      case 'bug':
      color = '#7fff00'
      break
      case 'normal':
      color = '#f5f5dc'
      break
      case 'flying':
      color = '#00ffff'
      break
      case 'poison':
      color = '#c300ff'
      break
      case 'electric':
      color = '#c8ff00'
      break
      case 'psychic':
      color = '#e96c95'
      break
      case 'ground':
      color = '#ceb250'
      break
      case 'rock':
      color = '#444444'
      break
      default:
        color = '#999999'
  }
  return color

  
}
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

*/