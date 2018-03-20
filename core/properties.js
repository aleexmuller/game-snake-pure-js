var Properties = (function () {
	/*
	 * Define as propriedades de um elemento
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
			getAttr: getAttr, 
			setContent: setContent,
			getContent: getContent,
			appendIn: appendIn,
			setStyle: setStyle,
			setEvent: setEvent
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
	 * Pega o valor de um atributo em um Element
	 * 
	 *	@string attr
	 *  return Boolean
	 */
	function getAttr(attr) {
		return this.element.getAttribute(attr);
	}

	/*
	 * Seta conteudo em em um Element
	 * 
	 *	@string value
	 *  return Boolean
	 */
	function setContent(value) {
		return this.element.innerHTML = value;
	}

	/*
	 * Seta conteudo em em um Element
	 * 
	 *	@string value
	 *  return Boolean
	 */
	function getContent(value) {
		return this.element.innerHTML;
	}

	/*
	 * Coloca um Element dentro de outro
	 * 
	 *	@string attr
	 *  return Boolean
	 */
	function appendIn(otherElement) {
		if (!__is_object(otherElement)) 
			throw new Exception('AppendToException','The method expects an object with a parameter');
		
		return otherElement.appendChild(this.element);
	} 

	/*
	 * Seta estilo no elemento
	 * 
	 *	@Style style
	 *  return Boolean
	 */
	function setStyle(style) {
		return style(this.element);
	}

	/*
	 * Seta um evento no elemento
	 * 
	 *	@string attr
	 *  return Boolean
	 */
	function setEvent(event) {
		return event(this.element);
	}
})(); 
