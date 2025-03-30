import { BASE_URL } from "./secrets.js"

async function randomQuoteGenerator(){

const arrowUp = document.getElementById("arrow-up")
const arrowDown = document.getElementById("arrow-down")
const multiplier = document.getElementById("multiplier")
// const quote = document.getElementById("quote")
const quoteButton = document.getElementById("quoteButton")
const quotes = document.getElementsByClassName("quote")
let multiplierNumber = 1
console.log(quotes.length)

async function quoteText(){
    for (let i = 0; i < multiplierNumber; i++){
        quotes[i].hidden = false
        console.log(quotes.hidden)
        quotes[i].textContent = await retrieveQuote()
    }

}

async function undoQuoteText() {
    for (let i = 0; i < 5; i++){
        quotes[i].hidden = true
    }
}

//TODO make quotes hidden when multiplier goes down 

async function retrieveQuote(){
    const data = await fetch("https://api.kanye.rest")
    const quoteData = await data.json()
    const quoteText = quoteData.quote
    return quoteText
}
console.log(quotes)

quoteButton.addEventListener('click', () => {
    retrieveQuote()
    quoteText()
    console.log("quotes changed")
})

arrowUp.addEventListener('click', () => {
    undoQuoteText()
    if (multiplierNumber < 5) {
        multiplierNumber++
        console.log("changed Number to " + multiplierNumber)
        multiplier.textContent = "" + multiplierNumber
    }
})

arrowDown.addEventListener('click', () => {
    undoQuoteText()
    if (multiplierNumber > 1) {
        multiplierNumber--
        console.log("changed Number to " + multiplierNumber)
        multiplier.textContent = "" + multiplierNumber
    }
})

}
randomQuoteGenerator()