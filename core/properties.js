var Properties = (function () {
	/*
	 * Define o construtor da funcao Properties
	 * 
	 *	@object element
	 *  return Object
	 */
	return function Properties(element) {
		if (!__is_object(element)) 
			throw new Exception('PropertiesException','The construtor expects an object in parameter');

		return { 
			element: element, 
			setAttr: setAttr, 
			setContent: setContent,
			getAttr: getAttr, 
			appendTo: appendTo
		}
	}

	/*
	 * Seta um atributo em um Element
	 * 
	 *	@string attr
	 *	@any value
	 *  return Boolean
	 */
	function setAttr(attr, value) {
		return this.element.setAttribute(attr, value);
	}

	/*
	 * Seta conteudo em em um Element
	 * 
	 *	@string value
	 *  return Boolean
	 */
	function setContent(value) {
		return this.element.innerHtml = value;
	}

	/*
	 * Pega o valor de um atributo em um Element
	 * 
	 *	@string attr
	 *  return Boolean
	 */
	function getAttr(attr) {
		return this.element.setAttribute(attr, value);
	}

	/*
	 * Coloca um Element dentro de outro
	 * 
	 *	@string attr
	 *  return Boolean
	 */
	function appendTo(into) {
		if (!__is_object(into)) 
			throw new Exception('AppendToException','The method expects an object with a parameter');
		
		return into.appendChild(this.element);
	} 

})(); 
