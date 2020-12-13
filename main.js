let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde 
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shufflerOder = () => {
    let colorOder = Math.floor(Math.random() * 4);
    order[order.length] = colorOder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = creatColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number -250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number -150);
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nivel!`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    creatColorElement(color).classList.add('selected');

    setTimeout(() => {
        creatColorElement(color).classList.remove('selected');
        checkOrder();
    },250);


}

let creatColorElement = (color) => {
    switch (color) {
        case 0:
            return green;
            break;
        case 1:
            return red;
            break;
        case 2:
            return yellow;
            break;
        default:
            return blue;
            break;
    }
}

// função que executa o proximo nivel
let nextLevel = () => {
    score++;
    shufflerOder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

// função de inicio de jogo
let playGame = () => {
    alert('Bem vindo ao Gênius! iniciando um novo jogo!');
    score = 0; 

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// iniciando o jogo e chamando a função inicio de jogo
playGame();