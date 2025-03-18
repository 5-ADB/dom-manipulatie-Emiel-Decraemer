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
const login = document.querySelector("#login")
const leeftijd = document.querySelector("#leeftijd")

//een naam en leeftijd toevoegen aan een object
toevoegen.addEventListener("click", addName())

function addName(gebruikers) {
  
}


// kijken of een naaam ouder of jonger is
jonger.addEventListener("click", () => {
    gebruikers.forEach(leeftijd => {
  if (gevraagdeLeeftijd.value >= leeftijd){
    const ouderOfJongerNamen = document.createElement("h1")
    ouderOfJongerNamen.textContent = login
    lijstnamen.appendChild(ouderOfJongerNamen)
  }
 })
})

ouder.addEventListener("click",  () => {
  gebruikers.forEach(leeftijd => {
  if (gevraagdeLeeftijd.value <= leeftijd){
    const ouderOfJongerNamen = document.createElement("h1")
    ouderOfJongerNamen.textContent = login
    lijstnamen.appendChild(ouderOfJongerNamen)
  }
 })
})