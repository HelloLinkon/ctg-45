$(document).ready(function(){

	
	$("#textarea").keyup(function(){
		var a = $("#textarea").val();
		var newlen = "5" - a.length;
		// $("#len").text(newlen);
		if(newlen < 0){
			$("#len").text(newlen).css("color", "red");
		}
		else{
			$("#len").text(newlen).css("color", "black");
		}
	});







	$("#pass").keyup(function(){
		var b = $("#pass").val();
		if(b.length < 6){
				// weak
				$("#msg").text("weak").addClass("error");
				$("#msg").removeClass("success");
		}
		else{
			// strong
			$("#msg").text("strong").addClass("success");
			$("#msg").removeClass("error");
		}
	});



});