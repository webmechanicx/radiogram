![alt text](http://s17.postimg.org/5m4ljet7j/logo_radiogram.png "RadiogramJS official logo")

##For Live Action, Please visit the github page:

###<a href="http://webmechanicx.github.io/radiogram/" target="_blank">Live Examples</a>

[![Join the chat at https://gitter.im/webmechanicx/radiogram](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/webmechanicx/radiogram?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/webmechanicx/radiogram/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Introduction

Radiogram is a very small UI library (2kb after mini) that designed and written in pure javascript for auto styling native radio button. The only purpose of ~~Radiogram.~~***expose*** a dead simple way to style `Radio Button` ***in minimum afford and time***.

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

##Usages: How do you initiate or expose

case:1 `Radiogram.expose(Id,obj)` has `passed ID as a selector` its a very common practice.

case:2 `Radiogram.expose(Class,obj)` has `passed CLASS as a selector` must be unique.


## Comfortable with RequireJS | CommonJS | jQuery and other soon!!!

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
##Few Example in Real Life!!! 

![alt text](http://s29.postimg.org/pg2cab7vb/screenshots_ui.gif "radio button example")



##Cross Browser Support:

<table><thead>
<tr>
<th align="center"><a href="https://camo.githubusercontent.com/082c7772560325405b65f0bd7324b4fe2da8ab3b/687474703a2f2f692e696d6775722e636f6d2f644a43314755762e706e67" target="_blank"><img src="https://camo.githubusercontent.com/082c7772560325405b65f0bd7324b4fe2da8ab3b/687474703a2f2f692e696d6775722e636f6d2f644a43314755762e706e67" alt="Chrome logo" data-canonical-src="http://i.imgur.com/dJC1GUv.png" style="max-width:100%;" height="48px" width="48px"></a></th>
<th align="center"><a href="https://camo.githubusercontent.com/c68f405f8299cba6be937c04c8c4d01e258cb31f/687474703a2f2f692e696d6775722e636f6d2f6f316d355263512e706e67" target="_blank"><img src="https://camo.githubusercontent.com/c68f405f8299cba6be937c04c8c4d01e258cb31f/687474703a2f2f692e696d6775722e636f6d2f6f316d355263512e706e67" alt="Firefox logo" data-canonical-src="http://i.imgur.com/o1m5RcQ.png" style="max-width:100%;" height="48px" width="48px"></a></th>
<th align="center"><a href="https://camo.githubusercontent.com/a90336eb5c6930efdade6a5f9a5f575e3bc4f90d/687474703a2f2f692e696d6775722e636f6d2f386833697a35482e706e67" target="_blank"><img src="https://camo.githubusercontent.com/a90336eb5c6930efdade6a5f9a5f575e3bc4f90d/687474703a2f2f692e696d6775722e636f6d2f386833697a35482e706e67" alt="Internet Explorer logo" data-canonical-src="http://i.imgur.com/8h3iz5H.png" style="max-width:100%;" height="48px" width="48px"></a></th>
<th align="center"><a href="https://camo.githubusercontent.com/da3fb17f8d67861ed830f4d1488dda4040e184df/687474703a2f2f692e696d6775722e636f6d2f695156346e6d4a2e706e67" target="_blank"><img src="https://camo.githubusercontent.com/da3fb17f8d67861ed830f4d1488dda4040e184df/687474703a2f2f692e696d6775722e636f6d2f695156346e6d4a2e706e67" alt="Opera logo" data-canonical-src="http://i.imgur.com/iQV4nmJ.png" style="max-width:100%;" height="48px" width="48px"></a></th>
<th align="center"><a href="https://camo.githubusercontent.com/369185dbc400565efa476f3830d35ffeb9e7c909/687474703a2f2f692e696d6775722e636f6d2f6a3374674e4b4a2e706e67" target="_blank"><img src="https://camo.githubusercontent.com/369185dbc400565efa476f3830d35ffeb9e7c909/687474703a2f2f692e696d6775722e636f6d2f6a3374674e4b4a2e706e67" alt="Safari logo" data-canonical-src="http://i.imgur.com/j3tgNKJ.png" style="max-width:100%;" height="48px" width="48px"></a></th>
</tr>
</thead><tbody>
<tr>
<td align="center">43+ ✔</td>
<td align="center">38+ ✔</td>
<td align="center">8+ ✔</td>
<td align="center">32+ ✔</td>
<td align="center">8+ ✔</td>
</tr>
</tbody></table>


##For Live Action, Please visit the github page for this project:

<a href="http://webmechanicx.github.io/radiogram/" target="_blank">Live Examples</a>






[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)





###The MIT License (<a href="http://opensource.org/licenses/mit-license">MIT</a>)
Copyright(c) 2015 ***Farhadur Rahim***

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


