![alt text](http://s17.postimg.org/5m4ljet7j/logo_radiogram.png "Logo Title Text 1")

Yet Another Radio Button Utility Written in Pure Javascript - to expose conditional UI in many different flavours as possible.

```javascript
obj = {
	name	: "form[fieldname][]", //Use any traditional element nave whether array or simple variable.
	layout	: [ '<div><span>Layout-1</span></div>',
		    '<div><span>Layout-2</span></div>',
		    '<div><span>Layout-3</span></div>'
		  ]
	};
```
###Usages: How do you initiates/Expose

case:1 `Radiogram.expose(Id,obj)` has `passed ID as a selector` its a very common style.

case:2 `Radiogram.expose(Class,obj)` has `passed CLASS as a selector` must be unique (***if multipe instance).

##Some Real Life Examples and Easy to Expand for Many Cases.  

![alt text](http://s29.postimg.org/pg2cab7vb/screenshots_ui.gif "few real life examples")


###All Browser Supports:
![alt text](http://s18.postimg.org/cuyig7ko9/cross_browser_compatible.jpg "Radiogram - cross browser javascript library")
