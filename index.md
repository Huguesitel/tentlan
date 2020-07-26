
<html>
<body>

<p>Click the button to open a new browser window.</p>

<button onclick="myFunction()">Try it</button>
<button onclick="myFunction2()">Indo</button>
<script>
      var myWindow
function myFunction() {
  myWindow = window.open("https://fr18.tentlan.com/worldmap/684/422");
      alert (myWindow.document.URL + ' ok')
}
function myFunction2() {
 
      alert (myWindow.document.URL + ' ok' + myWindow)
}     
</script>

</body>
</html>

