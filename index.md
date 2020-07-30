
<html>
<body>

<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>




<p>Click the button to open a new browser window.</p>

<p>Click the button to open a new window, and assure that the new window GETS focus (send the new window to the front).</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  var myWindow = window.open("https://fr18.tentlan.com/worldmap/683/424", "", "width=500,height=500,top=100,top=100");
//  myWindow.document.write("<p>A new window!</p>");
  myWindow.moveTo(200, 200);                                  // Moves the new   
  myWindow.focus(); 
myWindow.location.replace("https://www.w3schools.com");
//myWindow.location.replace("view-source:https://www.w3schools.com");
//  alert(myWindow.document.name)
}
</script>
function myFunction2() {
 
      alert (' Info' )
}     
</script>

</body>
</html>

