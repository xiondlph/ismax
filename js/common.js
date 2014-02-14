function _error(title, message){
	$('<div title="'+title+'"><p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span>'+message+'</p></div>').dialog({
    modal: true,
    autoOpen: true,
    buttons: {
      Ok: function() {
        $(this).dialog( "destroy" );
      }
    }
  });
}

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

$(document).ajaxError(function(data){
	_error('Ошибка', 'Сервис временно недоступен, пожалуйста попробуйте позже!');
});