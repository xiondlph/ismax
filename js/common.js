function getDelta (_event) {
	var delta = 0;
	var event = _event.originalEvent;
	if (!event){
		event = window.event
	}

	if (event.wheelDelta){
		delta = event.wheelDelta/120;
	}else if(event.detail){
		delta = -event.detail/3;
	}

	if (event.preventDefault){
		event.preventDefault();
	}

	event.returnValue = false;
	return delta;
}

var App = {}

var errorDlg = $('<div title="Ошибка"><p>Сервис временно недоступен, пожалуйста попробуйте позже!</p></div>');

$(document).ajaxError(function(data){
  errorDlg.dialog( "open" );
});

$(document).ready(function(){
  errorDlg.dialog({
    modal: true,
    autoOpen: false,
    buttons: {
      Ok: function() {
        $( this ).dialog( "close" );
      }
    }
  });
});