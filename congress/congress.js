import { senators } from "../data/senators.js";
import { representatives } from "../data/representatives.js";

const members = [...senators, ...representatives]; // modern combining
console.log(members.length);

const senatorDiv = document.querySelector(".senators");
const seniorityHeading = document.querySelector(".seniority");
const weaselOrderedList = document.querySelector(".weaselList");
const loyaltyHeading = document.querySelector(".mostLoyal");

function simplifiedMembers(chamberFilter) {
  const filteredArray = members.filter((member) =>
    chamberFilter ? member.short_title === chamberFilter : member
  );

  return filteredArray.map((senator) => {
    const middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `;
    return {
      id: senator.id,
      name: `${senator.first_name}${middleName}${senator.last_name}`,
      party: senator.party,
      imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-100px.jpeg`,
      gender: senator.gender,
      seniority: +senator.seniority,
      missedVotesPct: senator.missed_votes_pct,
      loyaltyPct: senator.votes_with_party_pct,
    };
  });
}

populateSenatorDiv(simplifiedMembers());

function populateSenatorDiv(simpleSenators) {
  simpleSenators.forEach((senator) => {
    let senFigure = document.createElement("figure");
    let figImg = document.createElement("img");
    let figCaption = document.createElement("figcaption");

    figImg.src = senator.imgURL;

    figCaption.textContent = senator.name;
    senFigure.appendChild(figImg);
    senFigure.appendChild(figCaption);
    senatorDiv.appendChild(senFigure);
  });
}

//
//const filterSenators = (prop, value) => simplifiedSenators().filter(senator => senator[prop] === value)

//const republicans = filterSenators('party', 'R')
//const femaleSenators = filterSenators('gender', 'F')

//console.log(republicans, femaleSenators)

const mostSeniorMember = simplifiedMembers('Sen.').reduce((acc, senator) => {
  return acc.seniority > senator.seniority ? acc : senator;
});

console.log(mostSeniorMember);

seniorityHeading.textContent = `The most senior member of The Senate is ${mostSeniorMember.name} who has taken our tax dollars as salary for more than ${mostSeniorMember.seniority} years!`;

const mostLoyal = simplifiedMembers().reduce((acc, senator) => {
  if (senator.loyaltyPct === 100) {
    acc.push(senator);
  }
  return acc;
}, []);

/*const cowardList = document.createElement("ol");

const spineless = mostLoyal.map((coward) => {
  let listItem = document.createElement("li");
  listItem.textContent = coward.name;
  cowardList.appendChild(listItem);
});
loyaltyHeading.appendChild(cowardList)
loyaltyHeading.textContent =
  "The most spineless of Congress who vote with their party 100% of the time are: ";
console.log(mostLoyal);

populateSenatorDiv(simplifiedMembers);
*/
const biggestWeasel = simplifiedMembers().reduce(
  (acc, senator) =>
    (acc.missedVotesPct || 0) > senator.missedVotesPct ? acc : senator,
  {}
);

const biggestWeasels = simplifiedMembers().filter(
  (senator) => senator.missedVotesPct >= 50
);

console.log(biggestWeasels);

biggestWeasels.forEach((weasel) => {
  let listItem = document.createElement("li");
  listItem.textContent = weasel.name;
  weaselOrderedList.appendChild(listItem);
});
