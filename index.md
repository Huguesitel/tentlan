
<html>
<body>

<p>Click the button 2   </p>

<button onclick="myFunction2()">Try it</button>

<script>

function myFunction2() {
 
      alert(' Info' )
      
}  
var pixelRatio = (function(){var ratio=1;if(window.screen.systemXDPI!==undefined&&window.screen.logicalXDPI!==undefined&&window.screen.systemXDPI>window.screen.logicalXDPI){ratio=window.screen.systemXDPI/window.screen.logicalXDPI;}
				else if(window.devicePixelRatio!==undefined){ratio=window.devicePixelRatio;}
				return ratio;})();
function f_clientWidth() {
	return f_filterResults (
		window.innerWidth ? window.innerWidth : 0,
		document.documentElement ? document.documentElement.clientWidth : 0,
		document.body ? document.body.clientWidth : 0
	);
function f_filterResults(n_win, n_docel, n_body) {
	var n_result = n_win ? n_win : 0;
	if (n_docel && (!n_result || (n_result > n_docel)))
		n_result = n_docel;
	return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
}
</script>

</body>
</html>

