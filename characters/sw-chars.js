import { people } from '../data/people.js'
import { getLastNumber, removeChildren } from '../utils/index.js'

const main = document.querySelector('#main')

const mainHeader = document.createElement('header')
document.body.insertBefore(mainHeader, main)

const allButton = document.createElement('button')
allButton.textContent = 'All Characters'
allButton.addEventListener('click', () => populateDOM(people))
mainHeader.appendChild(allButton)

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
maleButton.addEventListener('click', () => populateDOM(maleCharacters))
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))
mainHeader.appendChild(femaleButton)

const othersButton = document.createElement('button')
othersButton.textContent = 'Other Characters'
othersButton.addEventListener('click', () => populateDOM(otherCharacters))
mainHeader.appendChild(othersButton)

const maleCharacters = people.filter((person) => person.gender === 'male')

const femaleCharacters = people.filter((person) => person.gender === 'female')

const otherCharacters = people.filter((person) => {
  if (
    person.gender === 'n/a' ||
    person.gender === 'hermaphrodite' ||
    person.gender === 'none'
  ) {
    return person
  }
})

function populateDOM(characters) {
  // remove all the previous items before populating with new ones
  removeChildren(main)
  
  characters.forEach((element) => {
    const personFig = document.createElement('figure')
    const personImg = document.createElement('img')
    let charNum = getLastNumber(element.url)
    personImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    const personCaption = document.createElement('figcaption')
    personCaption.textContent = element.name

    personFig.appendChild(personImg)
    personFig.appendChild(personCaption)

    main.appendChild(personFig)
  })
}




































/*import { people } from "../data/people.js";
//import { getLastNumber, removeChildren } from '../utils/index.js'


/*const mainbody = document.querySelector('body')

const mainContent = document.querySelector('#main')
header.appendChild(maleButton)

mainbody.appendChild(header)*/





/*const header = document.createElement('header')
const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
//populateDOM(people)

maleButton.addEventListener('click', () => populateDOM(maleCharacters))

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'

femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

const otherCharacters = document.createElement('button')
otherCharacters.textContent = 'Other Characters'

otherCharacters.addEventListener('click', () => populateDOM(otherCharacters))

header.appendChild(maleButton)
header.appendChild(femaleButton)

document.body.insertBefore(header, mainContent)

const maleCharacters = people.filter((person) => person.gender === 'male')
const femaleCharacters = people.filter((person) => person.gender === 'female')
const otherCharacters = people.filter((person) => {
  if (
    person.gender !== 'male' &&
    person.gender !== 'female' 
  ) {
    return person
  }
})

function populateDOM(characters) {
  // clear the page first, then populate
  removeChildren(mainContent)
  characters.forEach((element) => {
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    const charNum = getLastNumber(element.url)
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    const charCaption = document.createElement('figcaption')
    charCaption.textContent = element.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)
    mainContent.appendChild(charFigure)
  })
}*/
