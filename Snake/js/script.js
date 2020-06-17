let canvas = document.getElementById('snake');
let context = canvas.getContext('2d') //contem as infos de linhas, cores, e outros parâmetros gráficos definidos no canvas
let box = 32; //tamanho do pixel dentro do canvas
//a cobra vai ser um array
let snake = [];
snake[0] = { //primeira posição da cobra
    x: 8*box,
    y: 8*box
};
let jogo;
let rgb = 0;
let VetRgb = [{colorCobra: '255,105,180', colorBack: '198,226,255', colorMarg: '141,182,205'},
              {colorCobra: '127,255,212', colorBack: '131,111,255', colorMarg: '71,60,139'},
              {colorCobra: '255,127,0', colorBack: '238,232,170 ', colorMarg: '255,165,0'}];

let direction = 'right';
let velocity = 300;
//gera números aleatórios de posição para a comida
let food = {
    x: Math.floor(Math.random()* 14 + 1) * box, //floor tira  a parte flutuante do número random
    y: Math.floor(Math.random()* 14 + 1) * box
}
//cria o background
function criarBG(){
    context.fillStyle = 'rgb('+VetRgb[rgb].colorBack+')';;
    context.fillRect(0, 0, 16*box, 16*box);//cria o retângulo 512x512
}
//Cria as margens
function margin(xm, ym){
    context.fillStyle = 'rgb('+VetRgb[rgb].colorMarg+')';;
    context.fillRect(xm, ym, box, box);
}
function drawMargin(){
        //margens horizontais
        var xm=0, ym=0;
        for(i=0; i < 16; i++){
            margin(xm, ym);
            ym=480;
            margin(xm, ym);
            xm+=32;
            ym=0;
        }
        //margens verticais
        xm=0, ym=0;
        for(i=0; i < 16; i++){
            margin(xm, ym);
            xm+=480;
            margin(xm, ym);
            ym+=32;
            xm=0;
        }
} 
//cria a cobrinha
function criarCobra(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = 'rgb('+VetRgb[rgb].colorCobra+')';
        context.fillRect(snake[i].x, snake[i].y, box, box); //o quadradinho tem tamanho 32px e foi inicializado no meio do canvas
    }
}
//cria a comida 
function drawnFood(){
    context.fillStyle = 'rgb(255,64,64)';
    context.fillRect(food.x, food.y, box, box);
}

//Eventos do teclado
document.addEventListener('keydown', update);
function update(event){
    if(event.keyCode ==37 && direction!='right') direction = 'left'; //a direção só muda se a anterior não for a contrária 
    if(event.keyCode ==39 && direction!='left') direction = 'right';
    if(event.keyCode ==40 && direction!='up') direction = 'down';
    if(event.keyCode ==38 && direction!='down') direction = 'up';
    if(event.keyCode ==33) {velocity -= 25; setInterval(iniciarJogo, velocity);}
    if(event.keyCode ==13){
        jogo = setInterval(iniciarJogo, velocity); //a cada 100 milisegundos a função iniciarJogo vai ser renovada
    }
}
//Funções dos botões de iniciar e reiniciar
function Start(){
    jogo = setInterval(iniciarJogo, velocity);
}
function Reiniciar(){
    jogo = setInterval(iniciarJogo, velocity);
    snake.splice(1);
    snake[0].x = 8*box;
    snake[0].y = 8*box;
}
//Função do botão mudar cores
function MudarCor(){
    if(rgb == 0){
        rgb = 1;
    }else{
        if(rgb == 1){
            rgb = 2;
        }else{
            rgb = 0;
        }
    }
    criarBG();
    drawMargin();
    criarCobra();
    drawnFood();
}

//verifica se saiu da margem
function verifica(){
    clearInterval(jogo); //Para a função jogo
    alert('GAME OVER');
}

//cria o cenário inicial
criarBG();
drawMargin();
criarCobra();
drawnFood();

//Função que fica atualizando o jogo
function iniciarJogo(){
//assegura que fique dentro da margem
    if(snake[0].x == 15*box) {verifica();snake[0].x-=32;}
    if(snake[0].x == 0) {verifica();snake[0].x+=32;}
    if(snake[0].y == 15*box) {verifica();snake[0].y-=32;}
    if(snake[0].y == 0) {verifica();snake[0].y+=32;}

    for(i=1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo); //Para a função jogo
            alert('GAME OVER');
        }
    }
    criarBG();
    drawMargin();
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
        food.x = Math.floor(Math.random()* 14 + 1) * box;
        food.y = Math.floor(Math.random()* 14 + 1) * box;
    }
//Atribui a nova cabeça da cobra 
    let newHead = {
        x: snakeX,
        y: snakeY
    };
    snake.unshift(newHead); //add a nova cabeça ao array
}