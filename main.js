var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");
var largura =350;
var altura =150;
var pos_x =125;
var pos_y =200;
var imagem;
var nova_imagem;

function adicionar(){
    nova_imagem =new Image();
    nova_imagem.onload =atualiza_imagem;
    nova_imagem.src =imagem;
}
function atualiza_imagem(){
    contexto.drawImage(nova_imagem, pos_x, pos_y, largura, altura);
}

window.addEventListener("keydown", tecla_pressionada);

function tecla_pressionada(evento){
    var tecla =evento.keyCode;
    console.log(tecla);
    if((tecla>=97 && tecla<=122) || (tecla>=65 && tecla<=90)){
        alfabeto();
        document.getElementById("h2").innerHTML ="você pressionou uma tecla do alfabeto";
    }
    else if(tecla>=48 && tecla<=57){
        numero();
        document.getElementById("h2").innerHTML ="você pressionou uma tecla numérica";
    }
    else if(tecla>=37 && tecla<=40){
        direcional()
        document.getElementById("h2").innerHTML ="você pressionou uma tecla direcional";
    }
    else if(tecla==17 || tecla==18 || tecla==27){
        especial();
        document.getElementById("h2").innerHTML ="você pressionou uma tecla Ctrl/Esc/Alt";
    }
    else{
        outras();
        document.getElementById("h2").innerHTML ="você pressionou outras teclas";
    }
}
function alfabeto(){
    imagem="alfabeto.png";
    adicionar();
}
function numero(){
    imagem="número.png";
    adicionar();
}
function direcional(){
    imagem="direcional.png";
    adicionar();
}
function especial(){
    imagem="especial.png";
    adicionar();
}
function outras(){
    imagem="outras.png";
    adicionar();
}