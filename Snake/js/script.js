let canvas = document.getElementById('snake');
let context = canvas.getContext('2d') //contem as infos de linhas, cores, e outros parâmetros gráficos definidos no canvas
let box = 32; //tamanho do pixel dentro do canvas
//a cobra vai ser um array
let snake = [];
snake[0] = { //primeira posição da cobra
    x: 8*box,
    y: 8*box
};
let direction = 'right';
//gera números aleatórios de posição para a comida
let food = {
    x: Math.floor(Math.random()* 15 + 1) * box, //floor tira  a parte flutuante do número random
    y: Math.floor(Math.random()* 15 + 1) * box
}
//cria o background
function criarBG(){
    context.fillStyle = 'pink';
    context.fillRect(0, 0, 16*box, 16*box);//cria o retângulo 512x512
}
//cria a cobrinha
function criarCobra(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = 'lightgreen';
        context.fillRect(snake[i].x, snake[i].y, box, box); //o quadradinho tem tamanho 32px e foi inicializado no meio do canvas
    }
}
//cria a comida 
function drawnFood(){
    context.fillStyle = 'lightyellow';
    context.fillRect(food.x, food.y, box, box);
}

//Eventos do teclado
document.addEventListener('keydown', update);
function update(event){
    if(event.keyCode ==37 && direction!='right') direction = 'left'; //a direção só muda se a anterior não for a contrária 
    if(event.keyCode ==39 && direction!='left') direction = 'right';
    if(event.keyCode ==40 && direction!='up') direction = 'down';
    if(event.keyCode ==38 && direction!='down') direction = 'up';
}

//Função que fica atualizando o jogo
function iniciarJogo(){
//assegura que a cobra não saia da tela
    if(snake[0].x > 15*box && direction == 'right') snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16*box;
    if(snake[0].y > 15*box && direction == 'down') snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16*box;

    for(i=1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo); //Para a função jogo
            alert('GAME OVER');
        }
    }

    criarBG();
    criarCobra();
    drawnFood();
//Posições iniciais da snake
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
//funções que determinam as direções 
    if(direction == 'right') snakeX+=box;
    if(direction == 'left') snakeX-=box;
    if(direction == 'up') snakeY-=box;
    if(direction == 'down') snakeY+=box;
//condição de quando a cobrinha come ou não a comida
    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //retira o último elemento da fila para dar a impressão de movimento
    }else{
        food.x = Math.floor(Math.random()* 15 + 1) * box;
        food.y = Math.floor(Math.random()* 15 + 1) * box;
    }
//Atribui a nova cabeça da cobra 
    let newHead = {
        x: snakeX,
        y: snakeY
    };
    snake.unshift(newHead); //add a nova cabeça ao array
}
let jogo = setInterval(iniciarJogo, 100); //a cada 100 milisegundos a função iniciarJogo vai ser renovada