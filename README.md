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
###Usages: How do you initiate or expose

case:1 `Radiogram.expose(Id,obj)` has `passed ID as a selector` its a very common style.

case:2 `Radiogram.expose(Class,obj)` has `passed CLASS as a selector` must be unique (***if multipe instance).


### Supported Modularity with requireJS | commonJS | jQuery others soon



    ```javascript
    
    requirejs(['Radiogram'], function(Radiogram) {
        Radiogram.expose(selector,obj);
    });

    var Radiogram = require('./Radiogram');
    Radiogram.expose(selector,obj)
    
    <script src="Radiogram.js"></script>
    <script>Radiogram.expose(selector,obj);</script>
    
    ```



##Some Real Life Examples and Easy to Expand for Many Cases.  

![alt text](http://s29.postimg.org/pg2cab7vb/screenshots_ui.gif "few real life examples")


###All Browser Supports:
![alt text](http://s18.postimg.org/cuyig7ko9/cross_browser_compatible.jpg "Radiogram - cross browser javascript library")


###The MIT License (<a href="http://opensource.org/licenses/mit-license">MIT</a>)
Copyright (c) <2015> <webmechanicx@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
