
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

<button onclick="myFunction()">Try it</button>
<button onclick="myFunction2()">Indo</button>
<script>
import java.awt.AWTException;
import java.awt.Robot;
 
/**
 * Déplacer le curseur de la souris sur l'écran
 * http://www.fobec.com/java/969/deplacer-curseur-ecran-avec-awt-robot.html
 * Axel 2010
 */
public class MouseSignZorro {
 
    public MouseSignZorro() throws AWTException {
        Robot robot = new Robot();
        /**
         * Fixer le delai entre chaque mouvement à 500 ms
         */
        robot.setAutoDelay(50);
        /**
         * Appeler OnIdle après le déplacement de la souris
         */
        robot.setAutoWaitForIdle(false);
 
        /**
         * Barre du haut
         */
        for (int i = 0; i < 20; i++) {
            robot.mouseMove(300+(20*i), 400);
        }
        /**
         * Diagonale
         */
        for (int i = 0; i < 20; i++) {
            robot.mouseMove(700-(20*i), 400+(20*i));
        }
        /**
         * Barre du bas
         */
        for (int i = 0; i < 20; i++) {
            robot.mouseMove(300+(20*i), 800);
        }
 
        /**
         * Quitter l'application
         */
        System.exit(0);
    }
 
    public static void main(String[] args) throws AWTException {
        MouseSignZorro mouseCatchMe = new MouseSignZorro();
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

