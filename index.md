
<html>
<body>

<p>Click the button to open a new browser window.</p>

<button onclick="myFunction()">Try it</button>
<button onclick="myFunction2()">Indo</button>
<script>
      var myWindow
function myFunction() {
    var response = UrlFetchApp.fetch("http://www.google.com/");
 Logger.log(response.getContentText());   
      
      
//  myWindow = window.open("https://fr18.tentlan.com/worldmap/684/422");
      alert (response.getContentText())
}
function myFunction2() {
 
      alert (myWindow.document.URL + ' Info' + myWindow)
}     
</script>

</body>
</html>

