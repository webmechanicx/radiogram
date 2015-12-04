(function(name, definition) {
    if (typeof module != 'undefined') module.exports = definition();
    else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);
	else if (typeof jQuery === 'function') {
				// jQuery Plugin
            	return function(name,source) {
                	jQuery.fn[name] = source;
                	return;
            	};
    }
    else this[name] = definition();
}('Radiogram', function() {
  //normally have inside define() or add to module.exports
  //@Radiogram Global NAMESPACE
  var c,elm,len,str,ul,t=0,make__id=''; //@GLOBAL VARIABLES
    
  return {
			expose: function(selector,obj){					   
						   elm = document.querySelector(selector);
						   if(Radiogram.isObject(obj)){
						   		var lenObj = Object.keys(obj).length;	
						   }
						   if((lenObj>0) && (lenObj<3)) rtn = Radiogram.analyzer(obj); //holding an array with values exported from object
					
			return true;
			},
			isObject :	function(obj){
						   //return true/false "TRUE" for object and else set to false
						return ((obj === null) || typeof obj == 'function') ? false :(typeof obj == 'object');
			},
			bindEvents: function(make__id){
								
						var parentWrapper = document.querySelector(make__id);
						var childWrapper='';
								
						for(c = 0; c < parentWrapper.children.length; c++){
        					childWrapper = parentWrapper.children[c];
	
										if (childWrapper.addEventListener) { // For all major browsers, except IE 8 and earlier
												childWrapper.addEventListener("click", Radiogram.eventHandler, false);	
											}else if(childWrapper.attachEvent) { // IE Hacked For IE 8 and earlier versions
												childWrapper.attachEvent("onclick", Radiogram.eventHandler);
										}
									}//end of for-loop
							},
							eventHandler: function(e){
								//var clickedItem = e.target.lastChild;
								 var clickedItem = this.lastChild.id;
								 var radioname = this.lastChild.name; // purpose of 
								 
								 Radiogram.removeSection(radioname);
								 document.getElementById(clickedItem).setAttribute('checked', 'checked');

								
					},
					removeSection: function(radioname){
									var radioObj = document.getElementsByName(radioname);
								  	for(c=0;c< radioObj.length; c++ ){
										if (radioObj[c].checked) radioObj[c].removeAttribute('checked');
								  	}
					return true;
					},
					analyzer: function(obj) {
							  var objArray, attrName='';
							  for (var key in obj) {
							  if (obj.hasOwnProperty(key)) {
							  //alert(key + " -> " + obj[key]);
							  	if(key === "name") attrName = obj[key];
								else{
									str = obj[key].toString();
									objArray=str.split(",");
									}
							  }
							}
							
						return Radiogram.finalizer(attrName,objArray);
					},
					finalizer : function(attrName,chunk){
								str = '',i=0;
								t++; //tracker for multiple instance
								make__id = '#radiogroup' + t;
									ul 		= document.createElement("ul");
									
									ul.id 	= 'radiogroup' + t;
									
									ul.setAttribute("class","radiogram");
									
								var docfrag = document.createDocumentFragment();
								docfrag = docfrag.appendChild(ul);
								var li;
								for(c=0; c <chunk.length; c++){
									i++;
									li = document.createElement("li");
									str = chunk[c].toString() + '<input id="radio' + t + i + '" type="radio" name="' + attrName + '"/>';
									
									// this method adopted from native IE and accepted by other browsers
									// ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
									li.insertAdjacentHTML("beforeend", str);
								  	docfrag.appendChild(li);
								}

								elm.appendChild(docfrag);
								Radiogram.bindEvents(make__id);
								return true;
								
					}
    }
}));
