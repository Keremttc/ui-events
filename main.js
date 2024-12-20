/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
let kleurLink = document.querySelector('a:nth-of-type(1)')


// Stap 2: addEventListener
kleurLink.addEventListener('click', kleur)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...
function kleur() {

  kleurLink.classList.toggle('kleur')
}



// Stap 1: querySelector
let hoverlink = document.querySelector('a:nth-of-type(2)')

// // Stap 2: addEventListener
hoverlink.addEventListener('mouseover', hover)

// // Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...
function hover() {

  hoverlink.classList.toggle('hoverlink')
}



// bibber functie
let bibberLink = document.querySelector('a:nth-of-type(3)')

bibberLink.addEventListener('dblclick', bibberen)

function bibberen( ){ 
  bibberLink.classList.toggle('bibber')
}

bibberLink.addEventListener('animationend',bibberen)


// snellebibber functie
let snel = document.querySelector('a:nth-of-type(4)')

  snel.addEventListener('click', Jumpie)

function Jumpie( ){ 
  snel.classList.toggle('springen')
}

  snel.addEventListener('animationend', Jumpie)