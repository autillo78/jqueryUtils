
$(function () {

	yearMin = new Date("2010").getFullYear()
	

	$("#send").click(checkForm)

	
	$("#date").change(validateDateOnChange)

})


function checkForm () {

	//check date
	if ($("#date").val() === "") {

		showErrors($("#date"), "enter a date")

		return false
	}
}


function showErrors (item, message) {

	item.focus().addClass("error")
	$("#errorMessage").text(message).hide().fadeIn(800)
}


function removeErrors (item) {

	item.removeClass("error")
	$("#errorMessage").text("")
}


function validateDateOnChange () {

	console.log('pass')

	var date =  new Date($(this).val())

	var day = date.getDate()
	var month = date.getMonth()
	var year = date.getFullYear()

	if (year > yearMin) {

		var currentYear = new Date().getFullYear()

		if (day >= 1 && day <= 31
			&& month >= 1 && month <= 12
			&& year <= currentYear) {

			removeErrors($(this))

		} else {

			showErrors($(this), "you are out of the date range") 
		}

	}

}
