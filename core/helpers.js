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
	else console.warn("The function __has_property expects an object with a parameter.");	
}

/*
 * IS OBJECT
 * 
 * Verifica se um elemento recebido por parametro é do tipo object 
 * padrão do javascript
 */
function __is_object (object) {
	return ('object' === typeof(object));
}

/*
 * IS FUNCTION
 * 
 * Verifica se um elemento recebido por parametro é do tipo object 
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
	else console.warn("The function __set_attr_element expects an object with a parameter.");
}


/*
 * GET ATTRIBUTE
 * 
 * Pega um atributo em um elemento do DOM
 */
function __get_attr_element (element, attr) {
	if (__is_object(element)) 
		return element.getAttribute(attr);
	else console.warn("The function __set_attr_element expects an object with a parameter.");
}

/*
 * GET ATTRIBUTE
 * 
 * Pega um atributo em um elemento do DOM
 */
function __append_element_into (element, into) {
	if (__is_object(element) && __is_object(into)) 
		return into.appendChild(element);
	else console.warn("The function __set_attr_element expects an object with a parameter.");
}