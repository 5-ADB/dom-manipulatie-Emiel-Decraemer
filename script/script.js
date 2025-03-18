const gebruikers = [
  { id: 1, login: "karel.kleintjes", leeftijd: 14 },
  { id: 2, login: "els.dotjes", leeftijd: 30 },
  { id: 3, login: "piet.pieters", leeftijd: 20 },
  { id: 4, login: "jos.teugels", leeftijd: 13 },
  { id: 5, login: "piet.pollekes", leeftijd: 27 },
];

const gevraagdeLeeftijd = document.querySelector("#filterLeeftijd")
const lijstnamen = document.querySelector("#lijstNamen")
const jonger = document.querySelector("#jonger")
const ouder = document.querySelector("#ouder")
const toevoegen = document.querySelector("#toevoegen")

//een naam en leeftijd toevoegen aan een object



// kijken of een naaam ouder of jonger is
jonger.addEventListener("click", kijkJonger())


ouder.addEventListener("click", kijkOuder)

function kijkJonger(gebruikers) {
    gebruikers.forEach(leeftijd => {
  if (gevraagdeLeeftijd.value >= leeftijd){
    const ouderOfJongerNamen = document.createElement("p")
    ouderOfJongerNamen.textContent = login
    lijstnamen.appendChild(ouderOfJongerNamen)
  }
 })
}

function kijkOuder(gebruikers) {
  gebruikers.forEach(leeftijd => {
  if (gevraagdeLeeftijd.value <= leeftijd){
    const ouderOfJongerNamen = document.createElement("p")
    ouderOfJongerNamen.textContent = login
    lijstnamen.appendChild(ouderOfJongerNamen)
  }
 })
}