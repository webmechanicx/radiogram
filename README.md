![alt text](http://s17.postimg.org/5m4ljet7j/logo_radiogram.png "Logo Title Text 1")

### Introduction

Radiogram is a very small UI library (2kb after mini) for native input radio button that designed and written in pure javascript. The only purpose to ~~Radiogram.~~expose a dead simple way to style 'Radio Button' ***in minimum affords***.

Radiogram never interferes with other element and style in same page/document and doesn’t even conflict with other radio type’s element.  It generates new radio button on the fly based on your own given structure and style ***(Freedom always your)***.

What is happening then behind the scene – Just taking two parameters call `selector` that must be unique and another parameter call `object` or `obj or whatever` in an object literal form. This object will contain two types of key – `name:` where value is a string and `layout:` where values defined as an array of strings. Perhaps `Still Freedom is your`.

Draft an idea `(html-block and style)`, Initiate with `Radiogram` and `expose` to `World Wide Web`.

Radiogram – Dynamically generates Radio button or conditional UI in many different flavours with minimum affords and time duration.

```javascript
obj = {
	//attach any valid name common for each radio input button e.g standard or array.
	name	: "form[fieldname][]",
	layout	: [ '<div><span>Radio Button-1</span></div>',
		    '<div><span>Radio Button-2</span></div>',
		    '<div><span>Radio Button-3</span></div>'
		  ]
	};
```
###Usages: How do you initiate or expose

case:1 `Radiogram.expose(Id,obj)` has `passed ID as a selector` its a very common style.

case:2 `Radiogram.expose(Class,obj)` has `passed CLASS as a selector` must be unique.


### Supported Modularity with requireJS | commonJS | jQuery others soon

```javascript
    requirejs(['Radiogram'], function(Radiogram) {
        Radiogram.expose(selector,obj);
    });

    var Radiogram = require('./Radiogram');
    Radiogram.expose(selector,obj);
```
Browser globally (e.g. in HTML):
    
```javascript
   <script src="Radiogram.js"></script>
   <script>Radiogram.expose(selector,obj);</script>
```
###Some Real Life Examples and Easy to Shape and Style in many other Purpose!!! 

![alt text](http://s29.postimg.org/pg2cab7vb/screenshots_ui.gif "radio button example")



###All Browser Supports:
![alt text](http://s18.postimg.org/cuyig7ko9/cross_browser_compatible.jpg "Radiogram - cross browser javascript library")

###For Live Demo, Please visit the github page:

<a href="http://webmechanicx.github.io/radiogram/" target="_blank">Live Examples</a>


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
