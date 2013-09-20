var urlRegex = "";

function message(from, msg) {
  var message = msg.replace(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/gi, "<a href='$&' target='_blank'>$&</a>");

  $('#lines').append($('<p>').append($('<b>').text(from), message))
    .animate({
      "scrollTop": $('#lines')[0].scrollHeight
    }, "fast");


  //Scroll to the bottom automatically on new message
  //$("#lines").animate({ scrollTop: $('#lines').height()}, 1000);
  //$('#lines').scrollTop($('#lines').height())


  //Truncate for the Alert
  /*var alertMsg = from + ": " + msg;
    if(alertMsg.length < 30) {

    } else {
    	alertMsg = alertMsg.substring(0,27) + "...";
    }
    */
  $.titleAlert("Message from " + from, {
    requireBlur: false,
    stopOnFocus: true,
    stopOnMouseMove: true,
    duration: 0,
    interval: 1000
  });
}