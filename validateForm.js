
$(function(){
	$("#send").click(checkForm);

	// remove error class
	$("#text").keydown(removeErrors);
	$("#date").on("keydown, click", removeErrors);
	//$("#date").keydown(removeErrors).click(removeErrors);	


});

function checkForm(){

	//check date
	if( $("#date").val() == "" ){
		showError( "#date", "enter a date" );

		return false;
	}

	//check text
	if( $("#text").val() == "" ){
		showError( "#text", "enter text" );

		return false;
	}

}


function showError( id, message ){

	$(id).focus().addClass("error");

	$("#errorMessage").text(message).hide().fadeIn(800);
}

function removeErrors(){

	$(this).removeClass("error");
	$("#errorMessage").text("");
}