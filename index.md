
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

<button onclick="MouseSignZorro()">ROBOT</button>
<button onclick="myFunction2()">Indo</button>
<script>
import  java.awt.Robot;
 java -classpath "." Mouse

public class Mouse{
 
public static void main(String arg[]){
  try{
         Robot objMouse = new Robot();
         objMouse.mouseMove(50,50);
   }
 catch (Exception e){
          System.out.println("Le probleme est le suivant :"+e.getMessage());
   }
 }
  
  
  
      var myWindow
function myFunction() {
    var response = UrlFetchApp.fetch("http://www.google.com/");
// Logger.log(response.getContentText());   
      
      
//  myWindow = window.open("https://fr18.tentlan.com/worldmap/684/422");
      alert (response.getContentText())
}
function myFunction2() {
 
      alert (myWindow.document.URL + ' Info' + myWindow)
}     
</script>

</body>
</html>

