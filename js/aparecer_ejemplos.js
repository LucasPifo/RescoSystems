var opcioneslista1 = document.getElementById('opcioneslista1');
var perceptron = document.getElementById('perceptron');
var click = true;
opcioneslista1.addEventListener('click', function(){
    if(click){
        perceptron.style.height = "auto";
        perceptron.style.transition = "0.5s";
        click = false;
    }else{
        perceptron.style.height = "0";
        perceptron.style.transition = "0.5s";
        click = true;
    }
});
