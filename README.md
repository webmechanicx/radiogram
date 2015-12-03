# radiogram
Yet Another Radio Button - When Rapid Prototyping is Matter.

```javascript
obj = {
	name	: "form[fieldname][]", //Use any traditional element nave whether array or simple variable.
	layout	: [ '<div><i class="fa fa-cc-paypal" style="color: #075884;"></i><span></span></div>',
		    '<div><i class="fa fa-cc-stripe" style="color: #16abf0;"></i><span></span></div>',
		    '<div><i class="fa fa-cc-visa" style="color: #f3d709;"></i><span></span></div>'
		  ]
	};

//usage#1 Same OBJECT[Layout] but by using Id as a selector 
Radiogram.build('#doxcy',obj);

//usage#2 Same OBJECT[Layout] but by using class as a selector
obj = {
	name	: "form[fieldname][]", //Use any traditional element nave whether array or simple variable.
	layout	: [ '<div><i class="fa fa-cc-amex" style="color: #34C354;"></i><span></span></div>',
	            '<div><i class="fa fa-cc-mastercard" style="color: #f08216;"></i><span></span></div>',
		    '<div><i class="fa fa-cc-jcb" style="color: #8c8677;"></i><span></span></div>'
		  ]
	};
		
Radiogram.build('.doxcy',obj); 
```
###EXAMPLE2: Gender(male or female) Selection

![alt text](https://camo.githubusercontent.com/894509ba4f54751a8d60b229470c18053bcbf4bb/687474703a2f2f7777772e626573746164766963652e636f2e756b2f77702d636f6e74656e742f75706c6f6164732f323031322f30362f6d656e2d776f6d656e2d67656e6465722e6a7067 "Logo Title Text 1")

```javascript
//EXAMPLE2 MALE/FEMALE Radio Group buttons
obj =	{
	name	: "form[fieldname2][]", //Use any traditional element nave whether array or simple variable.
	layout	: ['<div><i class="icon-user icons" style="color: #ec482e;"></i><span>Male</span></div>',
		   '<div><i class="icon-user-female icons" style="color: #16abf0;"></i><span>Female</span></div>',
		   '<div><i class="icon-people icons" style="color: #f3d709;"></i><span>Others</span></div>'
		  ]
	};

Radiogram.build('#gender',obj);
```


