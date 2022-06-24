//If 0, X moves, if 1, O moves
let counter = 0;
const tileArray = [];

const gameBoard = (() => {
    let board = document.getElementById('gameBoard');

    for (let i = 0; i < 9; i++) {
        let tile = document.createElement('div');
        tile.id = i;
        tile.classList.add('tiles');
        tile.setAttribute('marked', 'unmarked');
        tile.style.width = '120px';
        tile.style.height = '120px';
        tile.addEventListener('click', () => turnChecker(tile.id));
        tileArray.push(tile);
        board.appendChild(tile);
    }



})();




function turnChecker(id) {

    //If 0, X moves, if 1, Y moves
    if (counter == 0) {
        markX(id);
    }
    else if (counter == 1) {
        markO(id);
    }
    

    
}


function markX(id) {
    let tile = document.getElementById(id);

    let isMarked = tile.getAttribute('marked');
    if (isMarked == 'unmarked') {
        tile.setAttribute('marked', 'marked');
        let tileText = document.createTextNode('X');
        tile.appendChild(tileText);
        winCheck();

        let thing = document.querySelectorAll('.tiles');
        // console.log(thing);


        counter++;
        
    }
    else {
    }

}


const markO = (id) => {
    let tile = document.getElementById(id);

    let isMarked = tile.getAttribute('marked');
    if (isMarked == 'unmarked') {
        tile.setAttribute('marked', 'marked');
        let tileText = document.createTextNode('O');
        tile.appendChild(tileText);

        winCheck();

        counter--;

        
    }
    else {
    }
}


function winner(string) {
    if (string == 'X') {
        
    }
    if (string == 'O') {

    }
    if (string == 'tie') {

    }
}


const winCheck = () => {
    //Checks row1
    if (tileArray[0].innerHTML == 'X' && tileArray[1].innerHTML == 'X' && tileArray[2].innerHTML == 'X') {
        winner('X');
    }
    else if (tileArray[0].innerHTML == 'O' && tileArray[1].innerHTML == 'O' && tileArray[2].innerHTML == 'O') {
        winner('O');
    }
    //Checks row2
    else if (tileArray[3].innerHTML == 'X' && tileArray[4].innerHTML == 'X' && tileArray[5].innerHTML == 'X') {
        winner('X');
    }
    else if (tileArray[3].innerHTML == 'O' && tileArray[4].innerHTML == 'O' && tileArray[5].innerHTML == 'O') {
        winner('O');
    }
    //Checks row3
    else if (tileArray[6].innerHTML == 'X' && tileArray[7].innerHTML == 'X' && tileArray[8].innerHTML == 'X') {
        winner('X');
    }
    else if (tileArray[6].innerHTML == 'O' && tileArray[7].innerHTML == 'O' && tileArray[8].innerHTML == 'O') {
        winner('O');
    }
    //Checks column1
    else if (tileArray[0].innerHTML == 'X' && tileArray[3].innerHTML == 'X' && tileArray[6].innerHTML == 'X') {
        winner('X');
    }
    else if (tileArray[0].innerHTML == 'O' && tileArray[3].innerHTML == 'O' && tileArray[6].innerHTML == 'O') {
        winner('O');
    }
    //Checks column2
    else if (tileArray[1].innerHTML == 'X' && tileArray[4].innerHTML == 'X' && tileArray[7].innerHTML == 'X') {
        winner('X');
    }
    else if (tileArray[1].innerHTML == 'O' && tileArray[4].innerHTML == 'O' && tileArray[7].innerHTML == 'O') {
        winner('O');
    }
    //Checks column3
    else if (tileArray[2].innerHTML == 'X' && tileArray[5].innerHTML == 'X' && tileArray[8].innerHTML == 'X') {
        winner('X');
    }
    else if (tileArray[2].innerHTML == 'O' && tileArray[5].innerHTML == 'O' && tileArray[8].innerHTML == 'O') {
        winner('O');
    }
    //Checks diagonal1
    else if (tileArray[0].innerHTML == 'X' && tileArray[4].innerHTML == 'X' && tileArray[8].innerHTML == 'X') {
        winner('X');
    }
    else if (tileArray[0].innerHTML == 'O' && tileArray[4].innerHTML == 'O' && tileArray[8].innerHTML == 'O') {
        winner('O');
    }
    //Checks diagonal2
    else if (tileArray[2].innerHTML == 'X' && tileArray[4].innerHTML == 'X' && tileArray[6].innerHTML == 'X') {
        winner('X');
    }
    else if (tileArray[2].innerHTML == 'O' && tileArray[4].innerHTML == 'O' && tileArray[6].innerHTML == 'O') {
        winner('O');
    }
    else {
        winner('tie');
    }
}