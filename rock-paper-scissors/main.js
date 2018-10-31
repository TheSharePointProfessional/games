var content = document.getElementById('content');

var rockPaperScissors = "Replace this with your own abstraction of Rock Paper Scissors"

content.innerHTML = renderGame(rockPaperScissors);

function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button class="btn btn-primary">Rock</button>
                <button class="btn btn-primary">Paper</button>
                <button class="btn btn-primary">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5">You played: <b>ROCK</b></div>
                <div class="m-5">The computer played: <b>SCISSORS</b></div>
            </div>
            <h1 class="text-center">You win!</h1>
        </div>
    `
}

function whoWon () {
    if (document.getElementsByClassName('m-5')[0].innerHTML === "You played: Rock" && document.getElementsByClassName('m-5')[1].innerHTML === "The computer played: Rock") {
        document.getElementsByTagName("h1")[1].innerHTML = "It's a draw"
    } else if (document.getElementsByClassName('m-5')[0].innerHTML === "You played: Rock" && document.getElementsByClassName('m-5')[1].innerHTML === "The computer played: Paper") {
        document.getElementsByTagName("h1")[1].innerHTML = "You lose!"
    } else if (document.getElementsByClassName('m-5')[0].innerHTML === "You played: Rock" && document.getElementsByClassName('m-5')[1].innerHTML === "The computer played: Scissors") {
        document.getElementsByTagName("h1")[1].innerHTML = "You win!"
    } else if (document.getElementsByClassName('m-5')[0].innerHTML === "You played: Paper" && document.getElementsByClassName('m-5')[1].innerHTML === "The computer played: Rock") {
        document.getElementsByTagName("h1")[1].innerHTML = "You win!"
    } else if (document.getElementsByClassName('m-5')[0].innerHTML === "You played: Paper" && document.getElementsByClassName('m-5')[1].innerHTML === "The computer played: Paper") {
        document.getElementsByTagName("h1")[1].innerHTML = "It's a draw"
    } else if (document.getElementsByClassName('m-5')[0].innerHTML === "You played: Paper" && document.getElementsByClassName('m-5')[1].innerHTML === "The computer played: Scissors") {
        document.getElementsByTagName("h1")[1].innerHTML = "You lose!"
    } else if (document.getElementsByClassName('m-5')[0].innerHTML === "You played: Scissors" && document.getElementsByClassName('m-5')[1].innerHTML === "The computer played: Rock") {
        document.getElementsByTagName("h1")[1].innerHTML = "You lose!"
    } else if (document.getElementsByClassName('m-5')[0].innerHTML === "You played: Scissors" && document.getElementsByClassName('m-5')[1].innerHTML === "The computer played: Paper") {
        document.getElementsByTagName("h1")[1].innerHTML = "You win!"
    } else if (document.getElementsByClassName('m-5')[0].innerHTML === "You played: Scissors" && document.getElementsByClassName('m-5')[1].innerHTML === "The computer played: Scissors") {
        document.getElementsByTagName("h1")[1].innerHTML = "It's a draw"
    } 
}

function playRock () {
    document.getElementsByClassName('m-5')[0].innerHTML = "You played: Rock"
    var x = Math.floor((Math.random() * 100) + 1)
    if (x <= 30) {
        document.getElementsByClassName('m-5')[1].innerHTML = "The computer played: Rock"
    } else if (x > 30 && x <= 60) {
        document.getElementsByClassName('m-5')[1].innerHTML = "The computer played: Paper"
    } else {
        document.getElementsByClassName('m-5')[1].innerHTML = "The computer played: Scissors"
    }
    console.info(x)
    whoWon()
}

function playPaper () {
    document.getElementsByClassName('m-5')[0].innerHTML = "You played: Paper"
    var x = Math.floor((Math.random() * 100) + 1)
    if (x <= 30) {
        document.getElementsByClassName('m-5')[1].innerHTML = "The computer played: Rock"
    } else if (x > 30 && x <= 60) {
        document.getElementsByClassName('m-5')[1].innerHTML = "The computer played: Paper"
    } else {
        document.getElementsByClassName('m-5')[1].innerHTML = "The computer played: Scissors"
    }
    console.info(x)
    whoWon()
}

function playScissors () {
    document.getElementsByClassName('m-5')[0].innerHTML = "You played: Scissors"
    var x = Math.floor((Math.random() * 100) + 1)
    if (x <= 30) {
        document.getElementsByClassName('m-5')[1].innerHTML = "The computer played: Rock"
    } else if (x > 30 && x <= 60) {
        document.getElementsByClassName('m-5')[1].innerHTML = "The computer played: Paper"
    } else {
        document.getElementsByClassName('m-5')[1].innerHTML = "The computer played: Scissors"
    }
    console.info(x)
    whoWon()
}

function init () {
    console.info('Initializing Rock-Paper-Scissors')
    document.getElementsByClassName('btn')[0].addEventListener('click', playRock)
    document.getElementsByClassName('btn')[1].addEventListener('click', playPaper)
    document.getElementsByClassName('btn')[2].addEventListener('click', playScissors)
    document.getElementsByClassName('m-5')[0].innerHTML = "You played: "
    document.getElementsByClassName('m-5')[1].innerHTML = "The computer played: "
    document.getElementsByTagName("h1")[1].innerHTML = ""
}

document.addEventListener('DOMContentLoaded', init)