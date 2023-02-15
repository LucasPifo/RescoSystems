var next = document.getElementById('next');
var back = document.getElementById('back');
var mobile = document.getElementById('mobile');
var porsentaje = document.getElementById('porsentaje');
var posicion;
var anchura;
var mover = 0;
var cantidad = 8;
    
next.addEventListener('click', function(){
    if(mover == -900){
    }else{
        cantidad += 8;
        mover += -100;
        console.log(mover, cantidad);
        cambio(mover, cantidad);
        back.style.color = "white";
        back.style.cursor = "pointer";
    }
    if(mover == -900){
        next.style.color = "#787878";
        next.style.cursor = "default";
    }
});

back.addEventListener('click', function(){
    if(mover == 0){
    }else{
        cantidad -= 8;
        mover += 100;
        console.log(mover, cantidad);
        cambio(mover, cantidad);
        next.style.color = "white";
        next.style.cursor = "pointer";
    }
    if(mover == 0){
        back.style.color = "#787878";
        back.style.cursor = "default";
    }
});
        
function cambio(valor, porse){
    posicion = valor;
    anchura = porse;
    porsentaje.style.width = anchura + "%";
    porsentaje.style.transition = "all 0.3s";
    mobile.style.marginLeft = posicion + "%";
    mobile.style.transition = "all 0.5s";
}

var select = document.getElementsByClassName('select');
var select1 = document.getElementById('select1');
var select2 = document.getElementById('select2');
var select3 = document.getElementById('select3');
var select4 = document.getElementById('select4');
var select5 = document.getElementById('select5');
var select6 = document.getElementById('select6');
var select7 = document.getElementById('select7');
var select8 = document.getElementById('select8');
var select9 = document.getElementById('select9');
var select10 = document.getElementById('select10');

var abajo2 = document.getElementsByClassName('abajo2')

select1.addEventListener('click', function(){
    var actual = 0;
    mobile.style.marginLeft =  "0%";
    mobile.style.transition = "all 0.8s";
    porsentaje.style.width = "7%";
    porsentaje.style.transition = "all 0.3s";
    this.style.color = "firebrick";
    resetarColor(actual);
});

select2.addEventListener('click', function(){
    var actual = 1;
    mobile.style.marginLeft =  "-100%";
    mobile.style.transition = "all 0.8s";
    porsentaje.style.width = "14%";
    porsentaje.style.transition = "all 0.3s";
    this.style.color = "firebrick";
    resetarColor(actual);
});

select3.addEventListener('click', function(){
    var actual = 2;
    mobile.style.marginLeft =  "-200%";
    mobile.style.transition = "all 0.8s";
    porsentaje.style.width = "21%";
    porsentaje.style.transition = "all 0.3s";
    this.style.color = "firebrick";
    resetarColor(actual);
});

select4.addEventListener('click', function(){
    var actual = 3;
    mobile.style.marginLeft =  "-300%";
    mobile.style.transition = "all 0.8s";
    porsentaje.style.width = "28%";
    porsentaje.style.transition = "all 0.3s";
    this.style.color = "firebrick";
    resetarColor(actual);
});

select5.addEventListener('click', function(){
    var actual = 4;
    mobile.style.marginLeft =  "-400%";
    mobile.style.transition = "all 0.8s";
    porsentaje.style.width = "35%";
    porsentaje.style.transition = "all 0.3s";
    this.style.color = "firebrick";
    resetarColor(actual);
});

select6.addEventListener('click', function(){
    var actual = 5;
    mobile.style.marginLeft =  "-500%";
    mobile.style.transition = "all 0.8s";
    porsentaje.style.width = "42%";
    porsentaje.style.transition = "all 0.3s";
    this.style.color = "firebrick";
    resetarColor(actual);
});

select7.addEventListener('click', function(){
    var actual = 6;
    mobile.style.marginLeft =  "-600%";
    mobile.style.transition = "all 0.5s";
    porsentaje.style.width = "49%";
    porsentaje.style.transition = "all 0.3s";
    this.style.color = "firebrick";
    resetarColor(actual);
});

select8.addEventListener('click', function(){
    var actual = 7;
    mobile.style.marginLeft =  "-700%";
    mobile.style.transition = "all 0.8s";
    porsentaje.style.width = "56%";
    porsentaje.style.transition = "all 0.3s";
    this.style.color = "firebrick";
    resetarColor(actual);
});

select9.addEventListener('click', function(){
    var actual = 8;
    mobile.style.marginLeft =  "-800%";
    mobile.style.transition = "all 0.8s";
    porsentaje.style.width = "63%";
    porsentaje.style.transition = "all 0.3s";
    this.style.color = "firebrick";
    resetarColor(actual);
});

select10.addEventListener('click', function(){
    var actual = 9;
    mobile.style.marginLeft =  "-900%";
    mobile.style.transition = "all 0.8s";
    porsentaje.style.width = "70%";
    porsentaje.style.transition = "all 0.3s";
    this.style.color = "firebrick";
    resetarColor(actual);
});

function resetarColor(variable){
    console.log(variable);
    for(i=0; i<10; i++){
        if(variable == i){
        }else{
           select[i].style.color = "rgba(255,255,255,0.9)";
            console.log(select[i]);
        }
    }
}