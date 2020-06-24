
$(function () {

	$("#send").click(checkForm)

	
	$("#date").on("keydown, click", removeErrors)

})


function checkForm () {

	//check date
	if ($("#date").val() === "") {
		showError("#date", "enter a date")

		return false
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