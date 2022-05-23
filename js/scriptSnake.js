const gameBoard = document.querySelector('.snake__canvas');
const ctx = gameBoard.getContext('2d');
const start = document.querySelector('#start-button');
const lose = document.querySelector('.lose__canvas');
const win = document.querySelector('.win__canvas');
const restartButton = document.querySelector('.restart');
const restartButtonWin = document.querySelector('.restart-win');
const food = document.querySelectorAll('.snake__food');
const food1 = document.querySelector('#one');
const food2 = document.querySelector('#two');
const food3 = document.querySelector('#three');
const food4 = document.querySelector('#four');
const food5 = document.querySelector('#five');
const food6 = document.querySelector('#six');
const food7 = document.querySelector('#seven');
const food8 = document.querySelector('#eight');

const unit = 8;
const width = gameBoard.width;
const height = gameBoard.height;
let snake = [
    {x: unit * 4, y: 0},
    {x: unit * 3, y: 0},
    {x: unit * 2, y: 0},
    {x: unit * 1, y: 0},
    {x: 0, y: 0}
]
let score = 0;
let xWay = unit;
let yWay = 0;
let xFood;
let yFood;
let amountOfFood = 8;
let running = false;
let opacity = 1;

start.addEventListener('click', ()=>{
    start.classList.add('hide-button');
    startTheGame();
})

restartButtonWin.addEventListener('click',()=>{
    win.classList.add('inactive-result');
    resetGame();
})

restartButton.addEventListener('click', ()=>{
    lose.classList.add('inactive-result');
    resetGame();
});

window.addEventListener('keydown', moveDirection);



function startTheGame(){
    food.forEach(el=>{
        el.classList.remove('opacity');
    });
    running = true;
    createFood();
    drawFood();
    frame(); 
};
function drawFood(){
    ctx.beginPath();
    ctx.arc(xFood, yFood, unit + unit/2, 0, 2 * Math.PI, true);
    ctx.fillStyle = '#0b333c';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(xFood, yFood, unit, 0, 2 * Math.PI, true);
    ctx.fillStyle = '#165453';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(xFood, yFood, unit/2, 0, 2 * Math.PI, true);
    ctx.fillStyle = '#43d9ad';
    ctx.fill();
};
function createFood(){
    function randomFunc(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / unit) * unit;
        return randNum;
    }
    xFood = randomFunc(0, width - unit) +unit/2;
    yFood = randomFunc(0, height - unit) +unit/2;
};
function clearBoard(){
    ctx.fillStyle = '#377771'
    ctx.clearRect(0, 0, width, height);
    
};
function frame(){
    if(running){
        setTimeout(()=>{
        clearBoard();
        drawFood();
        moveSnake();
        drawSnake();
        checkGameOver();
        frame();
    }, 30)}
};
function checkAmountOfFood(){
    if(amountOfFood < 1){
        running = false;
        showTheWin();
    }
}
function drawSnake(){
    snake.forEach((snakePart)=>{
        ctx.fillStyle = `rgba(67, 217, 173, ${opacity})`;
        ctx.fillRect(snakePart.x, snakePart.y, unit, unit);
        opacity-=0.07;
})
opacity = 1;
}

function moveSnake(){
    const head = {x: snake[0].x + xWay,
                  y: snake[0].y + yWay}

    snake.unshift(head);
    if(head.x + unit/2 == xFood && head.y + unit/2 == yFood){
        createFood();
        --amountOfFood;
        checkAmountOfFood();
        checkFoodLeft(amountOfFood);
    }
    else{
    snake.pop()
    }
};
function checkFoodLeft(amountOfFood){
    switch(amountOfFood){
        case 7:{
            food8.classList.add('opacity');
            break;
        }
        case 6:{
            food7.classList.add('opacity');
            break;
        }
        case 5:{
            food6.classList.add('opacity')
            break;
        }
        case 4:{
            food5.classList.add('opacity');
            break;
        }
        case 3:{
            food4.classList.add('opacity');
            break;
        }
        case 2:{
            food3.classList.add('opacity');
            break;
        }
        case 1:{
            food2.classList.add('opacity');
            break;
        }
        case 0:{
            food1.classList.add('opacity');
            break;
        }
    }
}
function showTheWin(){
    win.classList.remove('inactive-result');
    running = false;
}

function moveDirection(event){
    const keyValue = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const rightDirection = (xWay == unit);
    const downDirection = (yWay == unit);
    const leftDirection = (xWay == -unit);
    const upDirection = (yWay == -unit);

    switch(true){
        case (keyValue == LEFT && !rightDirection):{
            setTimeout(()=>{xWay = -unit;
            yWay = 0;},40)
            break;
        }
        case (keyValue == UP && !downDirection):{
            setTimeout(()=>{xWay = 0;
                yWay = -unit;},40)
            break;
        }
        case (keyValue == RIGHT && !leftDirection):{
            setTimeout(()=>{xWay = unit;
                yWay = 0;},40)
            break;
        }
        case (keyValue == DOWN && !upDirection):{
            setTimeout(()=>{xWay = 0;
                yWay = unit;},40)
            break;
        }
    }
};
function resetGame(){
    snake = [
        {x: unit * 4, y: 0},
        {x: unit * 3, y: 0},
        {x: unit * 2, y: 0},
        {x: unit * 1, y: 0},
        {x: 0, y: 0}
    ]
    xWay = unit;
    yWay = 0;
    running = true;
    amountOfFood = 8;
    startTheGame();
};
function checkGameOver(){
    if(snake[0].x < 0 || snake[0].y < 0 || snake[0].x >= width || snake[0].y >= height){
        running = false;
        showGameOver();
    }
    for(let i = 1; i < snake.length; i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
            showGameOver();
        }
    }
};
function showGameOver(){
    lose.classList.remove('inactive-result');
};