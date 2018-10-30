var content = document.getElementById('content');

content.innerHTML = renderGame();

function renderGame() {
    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are 16 pebbles left</h4>
            <div class="w-50 text-center pebble-container">
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
            </div>
            <h4 class="mt-5">It's player 1's turn! How many pebbles will you take?</h4>
            <div>
                <select id="takeInput">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button class="btn btn-primary">Take</button>
            </div>
        </div>
    `
}

function gameOver () {
    if (document.getElementsByClassName('mt-5')[0].innerHTML === "It's player 1's turn! How many pebbles will you take?") {
    content.innerHTML = `<div class="container d-flex flex-column justify-content-start align-items-center">
                            <h2>Player 2 Wins!</h2>
                            <h6>Refresh page to play again</h6>
                        </div>`
    } else {
        content.innerHTML = `<div class="container d-flex flex-column justify-content-start align-items-center">
                                <h2>Player 1 Wins!</h2>
                                <h6>Refresh page to play again</h6>
                            </div>`
    }
}

function switchPlayer () {
    console.info(document.getElementsByClassName('mt-5')[0].innerHTML)
    if (document.getElementsByClassName('mt-5')[0].innerHTML === "It's player 1's turn! How many pebbles will you take?") {
        document.getElementsByClassName('mt-5')[0].innerHTML = "It's player 2's turn! How many pebbles will you take?"
    } else {
        document.getElementsByClassName('mt-5')[0].innerHTML = "It's player 1's turn! How many pebbles will you take?"
    }
}

function takeTurn () {
    var pebbles = document.getElementsByClassName('pebble')
    var count = document.getElementById('takeInput').value
    var i
    for (i = 0; i < pebbles.length; i++) {
        var x = pebbles[i].hasAttribute('style')
        if (x === false && count !== 0) {
            document.getElementsByClassName('pebble')[i].setAttribute("style", "background-color: #ffb600")
            count -= 1
            console.info('added style to' + pebbles[i])
            if (document.getElementsByClassName('pebble')[i].hasAttribute('id')) {
                gameOver()
            }
        } else {
            console.info(x)
        }

    }
    switchPlayer()
}

// function clickBtn () {
//     console.info("you clicked it!")
// }

function init () {
    console.info('Initializing Nim game now!')
    document.getElementsByClassName('pebble')[0].setAttribute('style', 'background-color: #ffb600')
    document.getElementsByClassName('pebble')[15].setAttribute('id', "last-pebble")
    document.getElementsByTagName('button')[0].addEventListener('click', takeTurn)
}

document.addEventListener('DOMContentLoaded', init)