let turn = 'X';
let title = document.querySelector('.title');
let square = [];

function endGame(square1, square2, square3) {
    title.innerHTML = `${square[square1]} Winner`;
    document.getElementById('item' + square1).style.backgroundColor = '#32C3BC';
    document.getElementById('item' + square2).style.backgroundColor = '#32C3BC';
    document.getElementById('item' + square3).style.backgroundColor = '#32C3BC';

    setInterval(() => {
        title.innerHTML += '.'
    }, 1000);
    setTimeout(() => {
        location.reload()
    }, 4000);


}




function winner() {



    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById('item' + i).innerHTML;
    }
    if (square[1] == square[2] && square[2] == square[3] && square[2] != '') {
        endGame(1, 2, 3);

    } else if (square[4] == square[5] && square[5] == square[6] && square[5] != '') {
        endGame(4, 5, 6);
    } else if (square[7] == square[8] && square[8] == square[9] && square[8] != '') {
        endGame(7, 8, 9);

    } else if (square[1] == square[5] && square[5] == square[9] && square[5] != '') {
        endGame(1, 5, 9);
    } else if (square[3] == square[5] && square[5] == square[7] && square[5] != '') {
        endGame(3, 5, 7)
    }
}


function game(id) {
    let elem = document.getElementById(id);
    if (turn === 'X' && elem.innerHTML === '') {
        elem.innerHTML = 'X'
        turn = 'O'
        title.innerHTML = 'Player O'
    } else if (turn === 'O' && elem.innerHTML === '') {
        elem.innerHTML = 'O'
        turn = 'X'
        title.innerHTML = 'Player X'
    }
    winner();
}