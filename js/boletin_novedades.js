$(function() {
    $('#subscribirse').on('click', function (event) {
        if(!alertify.myAlert){
          //define a new dialog
          alertify.dialog('myAlert',function factory(){
            return{
              main:function(message){
                this.message = message;
              },
              setup:function(){
                  return { 
                    buttons:[{text: "Aceptar", key:27}],
                    focus: { element:0 }
                  };
              },
              prepare:function(){
                this.setContent(this.message);
              }
          }});
        }
        //launch it.
        if($('#nombreCo').val()!="" && $('#emailCo').val()!=""){
            alertify.myAlert("Gracias por subscribirte al boletin de novedades "+$("#nombreCo").val()+". Cuando tengamos nuevas noticias te llegaran a tu correo automaticamente!");
            $('#nombreCo').val("");
            $('#emailCo').val("");
        }
    });
});