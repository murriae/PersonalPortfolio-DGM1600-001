import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'

const members = [...senators, ...representatives] // modern way to combine arrays like a genus!

const senatorDiv = document.querySelector('.senators')
const loyaltyHeading = document.querySelector('.mostLoyal')
const seniorityHeading = document.querySelector('.seniority')

const allRepub = senators.filter((senators) => senators.party === "R")
const allDemo = senators.filter((senators) => senators.party === "D")



function SimplifiedMembers(chamberFilter) {
  const filteredArray = members.filter((member) =>
    chamberFilter ? member.short_title === chamberFilter : member,
  )

  return filteredArray.map((senator) => {
    let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
    return {
      id: senator.id,
      name: `${senator.first_name}${middleName}${senator.last_name}`,
      party: senator.party,
      gender: senator.gender,
      seniority: +senator.seniority,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
      missedVotesPct: senator.missed_votes_pct,
      loyaltyPct: senator.votes_with_party_pct,
    }
  })
}

function populateSenatorDiv(simpleSenators) {
  var count = 0
  clearSenatorData()

  simpleSenators.forEach((senator) => {
    count++ 

    const senFigure = document.createElement('figure')
    const figImg = document.createElement('img')
    const figCaption = document.createElement('figcaption')

    figImg.src = senator.imgURL
    figCaption.textContent = senator.name

    senFigure.appendChild(figImg)
    senFigure.appendChild(figCaption)
    senatorDiv.appendChild(senFigure)
  })
  console.log(count)
}


//const filterSenators = (prop, value) => SimplifiedSenators().filter(senator => senator[prop] === value)

//console.log(filterSenators('gender', 'F'))

const mostSeniorMember = SimplifiedMembers().reduce((acc, senator) =>
  acc.seniority > senator.seniority ? acc : senator,
)



const mostLoyal = SimplifiedMembers().reduce((acc, senator) => {
  if (senator.loyaltyPct === 100) {
    acc.push(senator)
  }
  return acc
}, [])


const rParty = SimplifiedMembers().reduce((acc, senator) => {
  if(senator.party === 'R') {
      acc.push(senator)
  }
  return acc
}, [])


const republicanButton = document.querySelector('#republicanButton')
republicanButton.addEventListener('click', () => {
    populateSenatorDiv(rParty)
})


const democratsButton = document.querySelector('#democratsButton')
democratsButton.addEventListener ('click', () => populateSenatorDiv(dParty))
const dParty = SimplifiedMembers().reduce((acc, senator) => {
    if(senator.party === 'D') {
        acc.push(senator)
        
    }
    return acc
}, [])




const senator_button = document.querySelector('#senator_button');
senator_button.addEventListener('click', () => {
  console.log('click')
  populateSenatorDiv(SimplifiedMembers('Sen.'))
})

const represen_button = document.querySelector('#represen_button');
represen_button.addEventListener('click', () => {
  console.log('click')
  populateSenatorDiv(SimplifiedMembers('Rep.'))
})



// const demo_button = document.querySelector('#demo_button');
// demo_button.addEventListener('click', () => {
//   console.log('click')
//   populateSenatorDiv(SimplifiedMembers(allDemo))
// })



function clearSenatorData(){
  while(senatorDiv.firstChild){
    senatorDiv.removeChild(senatorDiv.firstChild)
  }
}




const cowardList = document.createElement('ol')

const spineless = mostLoyal.map((coward) => {
  let listItem = document.createElement('li')
  listItem.textContent = coward.name
  cowardList.appendChild(listItem)
})

loyaltyHeading.appendChild(cowardList)
