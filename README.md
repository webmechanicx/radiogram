![alt text](http://s17.postimg.org/5m4ljet7j/logo_radiogram.png "Logo Title Text 1")

Yet Another Radio Button Utility Written in Pure Javascript - to expose conditional UI in many different flavours as possible.

```javascript
obj = {
	name	: "form[fieldname][]", //Use any traditional element nave whether array or simple variable.
	layout	: [ '<div><i class="fa fa-cc-paypal" style="color: #075884;"></i><span></span></div>',
		    '<div><i class="fa fa-cc-stripe" style="color: #16abf0;"></i><span></span></div>',
		    '<div><i class="fa fa-cc-visa" style="color: #f3d709;"></i><span></span></div>'
		  ]
	};
```
###Usages: System initiates/Expose

case:1 `Radiogram.expose(Id,obj)` has `passed ID as a selector` its a very common style.
case:2 `Radiogram.expose(Class,obj)` has `passed CLASS as a selector` must be unique (if multipe instance).

##EXAMPLE2: Gender(male or female) Selection

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


