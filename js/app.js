/*-------------------------------- Constants --------------------------------*/

const board = [
    '', '', '', 
    '', '', '', 
    '', '', ''
    ]

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

/*---------------------------- Variables (state) ----------------------------*/

let turn = 'X'
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/

const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.textContent = `it is ${turn} turn`
    } else if (winner === false && tie === true) {
        messageEl.textContent = 'Tie Game'
    } else {
        messageEl.textContent = `${turn} player won the game`
    }
}

const updateBoard = () => {
    board.forEach((square, idx) => {
        squareEls[idx].textContent = square
    })
}

const render = () => {
    updateBoard()
    updateMessage()
}

const init = () => {

    render()
}

const placePiece = (idx) => {
    board[idx] = turn
}

const checkForWinner = () => {
    winningCombos.forEach((combo) => {

    })
}

/*----------------------------- Event Listeners -----------------------------*/

const handleClick = (event) => {
    const squareIndex = event.target.getAttribute('id')
    console.log(turn)
    
    if (event.target.value === 'X' || event.target.value === 'O'){
        return
    } else {
        placePiece(squareIndex)
        console.log(board)
    }

}

squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)
})


init()

