var ClickEvent = (function () {
	/*
	 * Cria um click event
	 * 
	 *  return Event
	 */
	return function ClickEvent(callback) {
		if (!ALLOWED.event(GET.const('CLICK_EVENT_NAME'))) 
			throw new Exception('CreateClickEventException', 'The click event can not be created!');
		
		return function(element) {
			return new Event(GET.const('CLICK_EVENT_NAME'), element, callback);
		}
	}	

	
})(); 

