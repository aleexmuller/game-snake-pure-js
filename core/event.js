var Event = (function () {
	/*
	 * Define o construtor da funcao Event
	 * 
	 *	@string event, @object element, @function callback
	 *
	 *  return Object
	 */
	return function Event(event, element, callback) {
		if (!__is_object(element)) 
			throw new Exception('CreateEventException', 'The constructor expects an object in parameter "2"');
		if (!__is_function(callback)) 
			throw new Exception('CreateEventException', 'The constructor expects a function in parameter "3"');

		return element.addEventListener(event, callback);
	}
})(); 
