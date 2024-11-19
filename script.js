/* ----------- DADOS INICIAIS ------------------------- */
//Iniciando a cor com active em uma variavel:
let corAtual = 'black'
let possoDesenhar = false

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



/* ----------------- FUNÇÕES --------------------------- */
function colorClickEvent(e){
    let cor = e.target.getAttribute('data-color')
    corAtual = cor

    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}

//Funções do mouse:
function mouseDownEvent(){
    possoDesenhar = true
    console.log('clicou no mouse')
}

function mouseMoveEvent(e){
    if(possoDesenhar){ //se verdadeiro
        let pontoX = e.pageX - tela.offsetLeft //dentro da tela eixo X
        let pontoY = e.pageY - tela.offsetTop  //dentro da tela eixo Y
        console.log(pontoX, pontoY)        
    }
}

function mouseUpEvent(){
    possoDesenhar = false
    console.log('soltou o mouse')
}




/* ---------------------- OBSERVAÇÃO -----------------------

Passando classes diferentes:
('.colorArea .color')

Passando classes juntas
('.color.active')

*/