import  quotesData from './quotes.js';
//console.log(quotesData[0])
// const quotes = [
//     {
//         quote: "Today is your opportunity to build the tomorrow you want.",
//         author: "Ken Poirot"
//     },
//     {
//         quote: "When you have a dream, you've got to grab it and never let go.",
//         author: "Carol Burnett"
//     },
//     {
//         quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
//         author: "Winston Churchill"
//     },
//     {
//         quote: "You define your own life. Don't let other people write your script.",
//         author: "Oprah Winfrey"
//     },
//     {
//         quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
//         author: "Justin Bieber"
//     }
// ]
//couldn't get quote.js to import here. searched for a bit, couldn't figure it out. i know i've seen this before but just wanted to finish project.


let quoteText = document.getElementById("quote-body")
let quoteAuthor =  document.getElementById("quote-author")
let containerEl = document.getElementById("container")
// let randNum = Math.floor(Math.random() * 5);
// console.log(randNum)

containerEl.addEventListener("click", updateQuote)

function updateQuote(){
    let randNum = Math.floor(Math.random() * quotesData.length);
    quoteText.textContent = quotesData[randNum].quote
    quoteAuthor.textContent = "- " + quotesData[randNum].author
}

//https://scrimba.com/scrim/co1ab4a3db8b08f9fb86d1b31?a=600.0.19.L5_7

//console.log(quotes.length)