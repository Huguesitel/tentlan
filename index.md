
<html>
<body>

<a href="https://huguesitel.github.io/tentlan/Pages/Page2.html">Visiter Page2</a>

<button onclick="myFunction2()">Try it</button>

<script>

function myFunction2() {
 
      alert(' Info' )
      
 var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.Width || body.clientWidth,
    y = win.innerHeight|| docElem.Height|| body.clientHeight;
    x1 = body.Width,
    y1 = body.Height;
    
alert(x1 + ' × ' + y1);     
  
var pixelRatio = (function(){var ratio=1;if(window.screen.systemXDPI!==undefined&&window.screen.logicalXDPI!==undefined&&window.screen.systemXDPI>window.screen.logicalXDPI){ratio=window.screen.systemXDPI/window.screen.logicalXDPI;}
				else if(window.devicePixelRatio!==undefined){ratio=window.devicePixelRatio;}
				return ratio;})();
	alert(pixelRatio )			
}
</script>

</body>
</html>

