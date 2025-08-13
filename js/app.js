/*-------------------------------- Constants --------------------------------*/

const board = document.querySelector('.board')
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')

/*---------------------------- Variables (state) ----------------------------*/

let turn = 'X'
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

const init = () => {
    console.log('it works')
    board.forEach((square) => {
        square = ''
    })

    //render()
}

/*----------------------------- Event Listeners -----------------------------*/

init()

