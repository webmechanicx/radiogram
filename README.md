# radiogram
Yet Another Radio Button - When Rapid Prototyping is Matter.

```javascript
obj =	{
		name	: "form[fieldname][]", //RSForm RadioGroup - Input Button use to be in this form.
		layout	: [ '<div><i class="fa fa-cc-paypal" style="color: #075884;"></i><span></span></div>',
					'<div><i class="fa fa-cc-stripe" style="color: #16abf0;"></i><span></span></div>',
					'<div><i class="fa fa-cc-visa" style="color: #f3d709;"></i><span></span></div>'
					]
		};

//usage#1 Same OBJECT[Layout] but by using selector as a class
Radiogram.build('#doxcy',obj);

//usage#2 Same OBJECT[Layout] but by using selector as a class
obj =	{
		name	: "form[fieldname][]", //RSForm RadioGroup - Input Button use to be in this form.
		layout	: [ '<div><i class="fa fa-cc-amex" style="color: #34C354;"></i><span></span></div>',
					'<div><i class="fa fa-cc-mastercard" style="color: #f08216;"></i><span></span></div>',
					'<div><i class="fa fa-cc-jcb" style="color: #8c8677;"></i><span></span></div>'
					]
		};
		
Radiogram.build('.doxcy',obj); 


//EXAMPLE2 MALE/FEMALE Radio Group buttons
obj =	{
		name	: "form[fieldname2][]", //RSForm RadioGroup - Input Button use to be in this form.
		layout	: [ '<div><i class="icon-user icons" style="color: #ec482e;"></i><span>Male</span></div>',
					'<div><i class="icon-user-female icons" style="color: #16abf0;"></i><span>Female</span></div>',
					'<div><i class="icon-people icons" style="color: #f3d709;"></i><span>Others</span></div>'
					]
		};
Radiogram.build('#gander',obj);
```


