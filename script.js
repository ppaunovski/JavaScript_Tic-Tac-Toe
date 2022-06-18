const positionOne = document.querySelector('[data-one]')
const positionTwo = document.querySelector('[data-two]')
const positionThree = document.querySelector('[data-three]')
const positionFour = document.querySelector('[data-four]')
const positionFive = document.querySelector('[data-five]')
const positionSix = document.querySelector('[data-six]')
const positionSeven = document.querySelector('[data-seven]')
const positionEight = document.querySelector('[data-eight]')
const positionNine = document.querySelector('[data-nine]')
const updateResX = document.querySelector('[data-res-x]')
const updateResO = document.querySelector('[data-res-o]')
const resetButton = document.querySelector('[data-reset]')

class Game{
    constructor(board){
        this.board = board
        this.updateDisplay()
        this.i = 0
        this.win = 1
        this.winX = 0
        this.winO = 0
    }

    addElement(n){
        const xWinner = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
        const oWinner = ["O", "X", "O", "X", "O", "X", "O", "X", "O"]   
        if(this.win){
            if(this.board[n] === ""){
                this.board[n] = xWinner[this.i++];
            }
        }
        else{
            if(this.board[n] === ""){
                this.board[n] = oWinner[this.i++];
            }
        }
       this.isOver()
    }

    gameOver(){
        if(this.win){
            this.winX++;
        }
        else{
            this.winO++;
        }
    }

    isOver(){
        if(this.board[0] !== "" && this.board[0] === this.board[1] && this.board[0]  === this.board[2]){
            if(board[0] === "X"){
                this.win = 1
            }
            else{
                this.win = 0
            }
            this.gameOver()
        }
        if(this.board[3] !== "" && this.board[3] === this.board[4] && this.board[4] === this.board[5]){
            if(board[3] === "X"){
                this.win = 1
            }
            else{
                this.win = 0
            }
            this.gameOver()
        }
        if(this.board[6] !== "" && this.board[6] === this.board[7] && this.board[7]  === this.board[8]){
            if(board[6] === "X"){
                this.win = 1
            }
            else{
                this.win = 0
            }
            this.gameOver()
        }
        if(this.board[0] !== "" && this.board[0] === this.board[3] && this.board[3] === this.board[6]){
            if(board[0] === "X"){
                this.win = 1
            }
            else{
                this.win = 0
            }
            this.gameOver()
        }
        if(this.board[1] !== "" && this.board[1] === this.board[4] && this.board[4] === this.board[7]){
            if(board[1] === "X"){
                this.win = 1
            }
            else{
                this.win = 0
            }
            this.gameOver()
        }
        if(this.board[2] !== "" && this.board[2] === this.board[5] && this.board[5] === this.board[8]){
            if(board[2] === "X"){
                this.win = 1
            }
            else{
                this.win = 0
            }
            this.gameOver()
        }   
        if(this.board[0] !== "" && this.board[0] === this.board[4] && this.board[4] === this.board[8]){
            if(board[0] === "X"){
                this.win = 1
            }
            else{
                this.win = 0
            }
            this.gameOver()
        }
        if(this.board[2] !== "" && this.board[2] === this.board[4] && this.board[4] === this.board[6]){
            if(board[2] === "X"){
                this.win = 1
            }
            else{
                this.win = 0
            }
            this.gameOver()
        }
    }
    resetBoard(){
        for(let j=0; j<9; j++) {
            this.board[j] = ""
        }
        this.i = 0
        this.updateDisplay()
    }
    updateDisplay(){
        positionOne.innerText = board[0];
        positionTwo.innerText = board[1];
        positionThree.innerText = board[2];
        positionFour.innerText = board[3];
        positionFive.innerText = board[4];
        positionSix.innerText = board[5];
        positionSeven.innerText = board[6];
        positionEight.innerText = board[7];
        positionNine.innerText = board[8];
        if(this.winX === undefined || this.winO === undefined) {
            updateResX.innerText = "X - 0";
            updateResO.innerText = "O - 0";
        }
        else {
            updateResX.innerText = "X - " + this.winX;
            updateResO.innerText = "O - " + this.winO;
        }
    }
}

let board = ["", "", "", "", "", "", "", "", ""]
const tictactoe = new Game(board)


        positionOne.addEventListener('click', () => {
            tictactoe.addElement(0)
            tictactoe.updateDisplay()
        })

        positionTwo.addEventListener('click', () => {
            tictactoe.addElement(1)
            tictactoe.updateDisplay()
        })

        positionThree.addEventListener('click', () => {
            tictactoe.addElement(2)
            tictactoe.updateDisplay()
        })

        positionFour.addEventListener('click', () => {
            tictactoe.addElement(3)
            tictactoe.updateDisplay()
        })

        positionFive.addEventListener('click', () => {
            tictactoe.addElement( 4)
            tictactoe.updateDisplay()
        })

        positionSix.addEventListener('click', () => {
            tictactoe.addElement( 5)
            tictactoe.updateDisplay()
        })

        positionSeven.addEventListener('click', () => {
            tictactoe.addElement(6)
            tictactoe.updateDisplay()
        })

        positionEight.addEventListener('click', () => {
            tictactoe.addElement(7)
            tictactoe.updateDisplay()
        })

        positionNine.addEventListener('click', () => {
            tictactoe.addElement( 8)
            tictactoe.updateDisplay()
        })

        resetButton.addEventListener('click', () => {
            tictactoe.resetBoard()
        })
