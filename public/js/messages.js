var urlRegex = "";

function message(from, msg) {
  var message = msg.replace(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/gi, "<a href='$&' target='_blank'>$&</a>");

  $('#lines').append($('<p>').append($('<b>').text(from), message));

  autoScroll(); //proc AutoScroll

  titleAlert(from);

}

//Scrolls the user if they are at the bottom of the chat
function autoScroll() {
  //If the user is not in the new chat area, dont scroll automatically
  if (($('#lines').scrollTop() + 355) > ($('#lines')[0].scrollHeight - 80)) {
    $('#lines').animate({
        "scrollTop": $('#lines')[0].scrollHeight
      },
      500);
  }
}

//Activates the Title alert
function titleAlert(from) {
  $.titleAlert("Message from " + from, {
    requireBlur: false,
    stopOnFocus: true,
    stopOnMouseMove: true,
    duration: 0,
    interval: 1000
  });
}