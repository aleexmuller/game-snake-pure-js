/*
 * HAS PROPERTY
 * 
 * Verifica se a propriedade de um objeto existe. Caso a propriedade exista a funcao 
 * retornará o valor da propriedade;
 */
function __has_property (object, property) {
	if (__is_object(object)) 
		if (object.hasOwnProperty(property))
			return object[property];
	else 
		console.warn("The function __has_property expects an object in parameter '1'");	
}

/*
 * HAS VALUE
 * 
 * Verifica se a propriedade de um objeto existe. Caso a propriedade exista a funcao 
 * retornará o valor;
 */
function __has_value (array, value) {
	if (__is_array(array)) 
		return (array.indexOf(value) > -1);
	else 
		console.warn("The function __has_value expects an array in parameter '1'");	
}

/*
 * IS ARRAY
 * 
 * Verifica se um elemento recebido por parametro é do tipo array 
 * padrão do javascript
 */
function __is_array (array) {
	return (typeof([]) === typeof(array));
}

/*
 * IS OBJECT
 * 
 * Verifica se um elemento recebido por parametro é do tipo object 
 * padrão do javascript
 */
function __is_object (object) {
	return (typeof(null) === typeof(object));
}

/*
 * IS FUNCTION
 * 
 * Verifica se um elemento recebido por parametro é do tipo function 
 * padrão do javascript
 */
function __is_function (object) {
	return ('function' === typeof(object));
}

/*
 * SET ATTRIBUTE
 * 
 * Seta um atributo em um elemento do DOM
 */
function __set_attr_element (element, attr, value) {
	if (__is_object(element)) 
		return element.setAttribute(attr, value);
	else 
		console.warn("The function __set_attr_element expects an object in parameter '1'");
}


/*
 * GET ATTRIBUTE
 * 
 * Pega um atributo em um elemento do DOM
 */
function __get_attr_element (element, attr) {
	if (__is_object(element)) 
		return element.getAttribute(attr);
	else 
		console.warn("The function __set_attr_element expects an object in parameter '1'");
}

/*
 * GET ATTRIBUTE
 * 
 * Pega um atributo em um elemento do DOM
 */
function __append_element_into (element, into) {
	if (__is_object(element) && __is_object(into)) 
		return into.appendChild(element);
	else 
		console.warn("The function __set_attr_element expects an object in parameter '1'");
}