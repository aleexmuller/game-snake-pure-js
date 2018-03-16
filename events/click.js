var EventClick = (function () {
	/*
	 * Cria um click event
	 * 
	 *  return Event
	 */
	return function EventClick(element, callback) {
		if (!Const.get('EVENT_CLICK')) 
			throw new Exception('CreateClickEventException', 'The event click can not be created!');
		
		return new Event(Const.get('EVENT_CLICK'), element, callback);
	}
})(); 

