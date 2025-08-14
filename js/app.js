/*-------------------------------- Constants --------------------------------*/

let board = [
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
const resetBtnEl = document.querySelector('#reset')

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
    
    board = [
    '', '', '', 
    '', '', '', 
    '', '', ''
    ]
    turn = 'X'
    winner = false
    tie = false
    
    render()
}

const placePiece = (idx) => {
    board[idx] = turn
}

const checkForWinner = () => {
    winningCombos.forEach((combo) => {
        const space1 = combo[0]
        const space2 = combo[1]
        const space3 = combo[2]
        
        if (board[space1] !== '' && board[space1] === board[space2] && board[space1] === board[space3]) {
            winner = true
        }

    })
}

let checkWin
// uses the some and every array method to check for a win state
const checkForWinnerEvery = () => {
    winningCombos.some((combo) => {
        return checkWin = combo.every((place) => {
            return board[place] !== '' && board[place] === board[combo[0]]
        })
    })
}

const checkForTie = () => {
    if (winner === true) {
        return
    }
    if (board.find((empty) => empty === '') === '') {
        tie = false
    } else {
        tie = true
    }
}

let checkTie
// uses the every array method to check for a tie state
const checkForTieEvery = () => {
    checkTie = board.every((space) => {
        return space !== ''
    })

    console.log(checkTie)
    return checkTie
}

const switchPlayerTurn = () => {
    if (winner === true) {
        return
    } else {
        turn !== 'X' ? turn = 'X' : turn = 'O'
    }
}

/*----------------------------- Event Listeners -----------------------------*/

const handleClick = (event) => {
    const squareIndex = event.target.id
    // const squareIndex = event.target.getAttribute('id')
    console.log(turn)
    
    if (event.target.textContent === 'X' || event.target.textContent === 'O' || winner){
        return
    } else {
        placePiece(squareIndex)
        // checkForWinnerEvery()
        checkForWinner()
        console.log(winner)
        console.log(checkWin)
        checkForTieEvery()
        checkForTie()
        switchPlayerTurn()
        console.log(turn)
        console.log(board)
        render()
    }

}

squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', () => {
    init()
})

init()

