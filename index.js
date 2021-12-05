const X = "X";
const O = "O";

let currentMove = X;

const cells = [...document.getElementsByClassName("cell")];

const checkWin = () => {
    const cellValues = [...document.getElementsByClassName("cell")].map(
        (cell) => cell.innerHTML
    );

    const winVarians = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const isEmtyCell = cellValues.find((cellValue) => cellValue === "");

    if (isEmtyCell === undefined) {
        const winContainer = document.getElementsByClassName("winContainer")[0];
        winContainer.innerHTML = 'Round Draw!';
    }

    winVarians.forEach((variant) => {
        if (
            cellValues[variant[0]] === cellValues[variant[1]] &&
            cellValues[variant[0]] === cellValues[variant[2]] &&
            cellValues[variant[0]] !== "" &&
            cellValues[variant[1]] !== "" &&
            cellValues[variant[2]] !== ""
        ) {
            const winContainer = document.getElementsByClassName("winContainer")[0];
            winContainer.innerHTML = `Winner is: ${cellValues[variant[0]]} !!!`;
        }
    });
}
cells.forEach((cell) => {
    cell.onclick = () => {
        if (cell.innerHTML) {
            return
        }

        cell.innerHTML = currentMove;

        currentMove = currentMove === X ? O : X;
        checkWin();
    }
})

