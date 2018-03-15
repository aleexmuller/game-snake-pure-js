var Event = (function () {
	// mapa de eventos que podem ser criados
	// const MAP_EVENTS = [EVENT_CLICK, EVENT_FOCUS, EVENT_FOCUSOUT, EVENT_HOVER];

	// cria um closure exception
	var exception = Exception.make('EventException');

	return {click: click}
	/*
	 * Cria um evento
	 * 
	 *	@string name
	 *  return DOM Element
	 */
	function click(element, callback) {
		// if (!MAP_EVENTS.includes(EVENT_CLICK)) {
		// 	throw exception('This event can not be created!');
		// } 
		return element.addEventListener(Const.get('EVENT_CLICK'), callback);
	}
})(); 
