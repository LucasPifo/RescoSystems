$(function(){
	var	btn = $(".slider__btn");
	btn.on("click",function(){
		$(".slider__item").first().clone().appendTo(".slider");
		$(".slider__image").first().css({transform: "rotateX(-180deg)", opacity: 0});
		setTimeout(function(){
			$(".slider__item").first().remove();
		},200);
	});
    $(".slider__image").on("click",function(){
        if($(this).attr("id") == "p1"){
           
        }
	}); 
});
