$(function(){
	$("#send").click(checkForm);

});

function checkForm(){

	//check date
	if( $("#date").val() == "" ){
		showError( $("#date") );

		return false;
	}

	//check text
	if( $("#text").val() == "" ){
		showError( $("#text") );

		return false;
	}

}


function showError( item ){
	item.focus();
	item.addClass("error");

	setInterval(function(){
        item.removeClass('error');
    }, "3000");
}