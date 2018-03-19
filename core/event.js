var Event = (function () {
	/*
	 * Define um evento
	 * 
	 *	@string event, @object element, @function callback
	 *
	 *  return Object
	 */
	return function Event(event, element, callback) {
		if (!__is_object(element) || !__is_function(callback)) 
			throw new Exception("CreateEventException', 'The constructor expects an object in parameter '2' and a function in parameter '3'");

		return element.addEventListener(event, callback);
	}
})(); 
