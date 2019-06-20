// add et remove 
$("circle").click(function(){
	$(this).toggleClass('colorBack');
});

// ajoute une classe apres un clic  
$(".on").click(function() {
	$("circle").addClass('colorBack');
	$("rect").addClass('colorBack');
});
// enleve une classe apres un clic
$(".off").click(function() {
	$("circle").removeClass('colorBack');
	$("rect").removeClass('colorBack');
});

$("#one").click(function() {
	if ($(this).hasClass('colorBack')){
		$(".l1").removeClass('colorBack');
	}
	else {
		$(".l1").addClass('colorBack');
	}
});

$("#two").click(function() {
	if ($(this).hasClass('colorBack')){
		$(".l2").removeClass('colorBack');
	}
	else {
		$(".l2").addClass('colorBack');
	}
});

$("#three").click(function() {
	if ($(this).hasClass('colorBack')){
		$(".l3").removeClass('colorBack');
	}
	else {
		$(".l3").addClass('colorBack');
	}
});

$("#four").click(function() {
	if ($(this).hasClass('colorBack')){
		$(".l4").removeClass('colorBack');
	}
	else {
		$(".l4").addClass('colorBack');
	}
});

$("#losange").click(function() {
	if ($(this).hasClass('colorBack')){
		$(".l5").removeClass('colorBack');
		$(".los").removeClass('colorBack');
	}
	else {
		$(".l5").addClass('colorBack');
		$(".los").addClass('colorBack');
	}
});
