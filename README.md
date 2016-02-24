![alt text](http://s17.postimg.org/5m4ljet7j/logo_radiogram.png "RadiogramJS official logo")

##For Live Action, Please visit the github page:

###<a href="http://webmechanicx.github.io/radiogram/" target="_blank">Live Examples</a>

### Introduction

Radiogram is a very small UI library (2kb after mini) that designed and written in pure javascript for auto styling native radio button. The only purpose to ~~Radiogram.~~***expose*** a dead simple way to style 'Radio Button' ***in minimum affords and time***.

Radiogram never interferes with other element and style in same page/document and doesn’t even conflict with other radio type’s element.  It generates new radio button on the fly based on your own given structure and style ***(Freedom always your)***.

What is happening then behind the scene – Just taking two parameters call `selector` that must be unique and another parameter call `object` or `obj or whatever` in an object literal form. This object will contain two types of key – `name:` where value is a string and `layout:` where values defined as an array of strings. Perhaps `Still Freedom is your`.

Draft an idea `(html-block and style)`, Initiate with `Radiogram` and `expose` to `World Wide Web`.


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


### Comfortable with RequireJS | CommonJS | jQuery and others soon

#### in AMD (e.g. with requireJS):

```javascript
    requirejs(['Radiogram'], function(Radiogram) {
        Radiogram.expose(selector,obj);
    });
```

#### in commonJS (e.g. nodeJS):

```javascript
    var Radiogram = require('./modules/Radiogram');
    Radiogram.expose(selector,obj);
```
####Browser globally (e.g. in HTML):
    
```javascript
   <script src="Radiogram.js"></script>
   <script>Radiogram.expose(selector,obj);</script>
```
###Few Examples on Real Life!!! 

![alt text](https://cloud.githubusercontent.com/assets/7023876/13033645/1f912404-d349-11e5-90a8-423f9893ed1b.gif "radio button example")



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
