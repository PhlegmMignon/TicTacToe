const gameBoard = (() => {
    let board = document.getElementById('gameBoard');
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement('div');
        tile.id = i;
        tile.classList.add('tiles');
        tile.style.width = '120px';
        tile.style.height = '120px';

        board.appendChild(tile);
    }

  
})();




const turnSelector = () => {
    const counter = 0;

    //If 0, X moves, if 1, Y moves
    const markX = (counter, id) => {
        if (counter == 0) {
            document.getElementById

        }
    }


    //return {markX, markO}
}