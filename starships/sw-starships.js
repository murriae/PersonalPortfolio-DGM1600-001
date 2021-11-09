import { starships } from "../data/starships.js"
import { getLastNumber, removeChildren } from '../utils/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.displaySection')

const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

const missingMessage = document.querySelector('.missingMessage')

closeButton.addEventListener('click', () => modal.classList.toggle('is-active'))
modalBackground.addEventListener('click', () => modal.classList.toggle('is-active'))

function populateNav(starships) {
  starships.forEach(starship => {
    let anchorWrap = document.createElement('a')
    anchorWrap.href = '#'
    let listItem  = document.createElement('li')
    listItem.textContent = starship.name
    anchorWrap.addEventListener('click', () => {
      populateShipView(starship)
    })

    anchorWrap.appendChild(listItem)
    navList.appendChild(anchorWrap)
  })
}

populateNav(starships)

function populateShipView(shipData) {
  removeChildren(shipView)
  console.log(`Thanks for clicking on ${shipData.name}`)
  let shipImage = document.createElement('img')
  let shipNum = getLastNumber(shipData.url)
  shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
  shipImage.addEventListener('error', () => {
    shipImage.hidden = true
    modal.classList.toggle('is-active')
    missingMessage.textContent = `The ship ${shipData.name} has been canceled.`
  })
  shipView.appendChild(shipImage)
}