

//simple ajax call with jquery
$.ajax({
    type: "POST",
    url: 'p_booking.php?action=save',
    data: {
        bookingId: bookingId,
        userId: $("#userId").val()
    },
    success: function (data) {
       	location.reload();    
    },
    error: function (data) {
        console.log('error: ' + data);
    },
    dataType: "text"
});