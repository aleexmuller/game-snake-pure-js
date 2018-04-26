var ClickEvent = (function () {
	/*
	 * Cria um click event
	 * 
	 *  return Event
	 */
	return function ClickEvent(callback) {
		if (!ALLOWED.event(GET.const('EVENT_CLICK_NAME'))) 
			throw new Exception('CreateClickEventException', 'The event click can not be created!');
		
		return function(element) {
			return new Event(GET.const('EVENT_CLICK_NAME'), element, callback);
		}
	}	

	
})(); 

