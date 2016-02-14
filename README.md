![alt text](http://s17.postimg.org/5m4ljet7j/logo_radiogram.png "RadiogramJS official logo")

##Expose The Most Stylist Radio Buttons:

[![Join the chat at https://gitter.im/webmechanicx/radiogram](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/webmechanicx/radiogram?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/webmechanicx/radiogram/trend.png)](https://bitdeli.com/free "Bitdeli Badge")




## Introduction


Radiogram is a very small (2kb after mini) JS Utility that designed and written in pure javascript to expose a custom looks for native radio buttons. ***"DON'T GET MISS UNDERSTOOD"*** because this utility does not work like the way traditional framework does.



## Advantage:


1. ***in minimum afford and time*** you get stylist Radio Button using any of your existing system/frameworks/web assets
2. ***(Freedom always your)*** Pick an idea, load your structure and expose on the fly.
2. Zero Dependency.
3. No Complex Configuration. Because it is really really very small utility.
4. Execute for almost any version of the browser.
5. You can implement CHECK BOX same way by adding yourself as a Contributor...


##Usages: How can you initiate or expose

**Example**


#####Browser globally (e.g. in HTML):
    
```javascript
   <script src="Radiogram.js"></script>
   <script>Radiogram.expose(selector,obj);</script>
```

 
Define the layout which going to expose.


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

case:1 `Radiogram.expose(Id,obj)` has `passed ID as a selector` its a very common practice.

case:2 `Radiogram.expose(Class,obj)` has `passed CLASS as a selector` must be unique.



##Examples in Real Life!!! 

**Also Live Action:
<a href="http://webmechanicx.github.io/radiogram/" target="_blank">Live Examples</a>

[!(http://github.me.pn/images/screenshots-ui.gif)](http://webmechanicx.github.io/radiogram/)





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




###The MIT License (<a href="http://opensource.org/licenses/mit-license">MIT</a>)
Copyright(c) 2015-2016 ***@webmechanicx - Farhadur Rahim***

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

