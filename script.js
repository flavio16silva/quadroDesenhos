/* ----------- DADOS INICIAIS ------------------------- */
//Iniciando a cor com active em uma variavel:
let corAtual = 'black'
let possoDesenhar = false
//Posições do mouse - inicial
let mouseX = 0
let mouseY = 0

//Acessando a tela do Canvas
let tela = document.querySelector('#tela')
let contexto = tela.getContext('2d')

/* -------------- EVENTOS -------------------------------*/
//Pegando todas as cores e percorrendo a div, como uma lista
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent) 
})

//Pegando o movimento do mouse dentro da tela e gerando funções
tela.addEventListener('mousedown', mouseDownEvent)
tela.addEventListener('mousemove', mouseMoveEvent)
tela.addEventListener('mouseup', mouseUpEvent)

//Botao para limpar a tela
document.querySelector('.clear').addEventListener('click', limparTela)



/* ----------------- FUNÇÕES --------------------------- */
function colorClickEvent(e){
    //target: elemento que disparou o evento
    let cor = e.target.getAttribute('data-color') 
    corAtual = cor

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}

//Funções do mouse:
function mouseDownEvent(e){
    possoDesenhar = true
    //posição atual/anterior do mouse no momento do click
    mouseX = e.pageX - tela.offsetLeft
    mouseY = e.pageY - tela.offsetTop
    
}

function mouseMoveEvent(e){
    if(possoDesenhar){ //se verdadeiro
        // let pontoX = e.pageX - tela.offsetLeft //dentro da tela eixo X
        // let pontoY = e.pageY - tela.offsetTop  //dentro da tela eixo Y
        // console.log(pontoX, pontoY)     
        
        Desenhar(e.pageX, e.pageY)
    }
}

function mouseUpEvent(){
    possoDesenhar = false
    //console.log('soltou o mouse')
}

function Desenhar(x, y){
    //posição que tem a desenhar
    let pointX = x - tela.offsetLeft
    let pointY = y - tela.offsetTop

    //fazer o desenho - metodos relacionados a fazer uma linha
    contexto.beginPath()            //caminho a desenhar
    contexto.lineWidth = 5          //largura da linha
    contexto.lineJoin = 'round'     //formato da linha - bola
    contexto.moveTo(mouseX, mouseY) //movendo o mouse
    contexto.lineTo(pointX, pointY) //faça uma linha
    contexto.closePath()            //fechando o desenho
    contexto.strokeStyle = corAtual //cor da linha
    contexto.stroke()               //finalizar todo o processo

    //Salvando a posição do mouse como no anterior
    mouseX = pointX
    mouseY = pointY

    /*
    Obs.: a cada movimento do mouse pegará 
    a posição anterior e continuará.
    */
}

/*
Limpar a tela
 - Zerar o cursor e o processo de desenho
*/
function limparTela(){
    contexto.setTransform(1, 0, 0, 1, 0, 0)
    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height) //limpar retangulo
}




/* ---------------------- OBSERVAÇÃO -----------------------

Passando classes diferentes:
('.colorArea .color')

Passando classes juntas
('.color.active')

*/