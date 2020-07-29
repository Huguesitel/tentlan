
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
// Java program to demonstrate working of Robot 
// class. This program is for Windoes. It opens 
// notepad and types a message. 
import java.awt.AWTException; 
import java.awt.Robot; 
import java.awt.event.KeyEvent; 
import java.io.*; 

public class robo 
{ 
	public static void main(String[] args) throws IOException, 
						AWTException, InterruptedException 
	{ 
		String command = "notepad.exe"; 
		Runtime run = Runtime.getRuntime(); 
		run.exec(command); 
		try { 
			Thread.sleep(2000); 
		} 
		catch (InterruptedException e) 
		{ 
			// TODO Auto-generated catch block 
			e.printStackTrace(); 
		} 

		// Create an instance of Robot class 
		Robot robot = new Robot(); 

		// Press keys using robot. A gap of 
		// of 500 mili seconds is added after 
		// every key press 
		robot.keyPress(KeyEvent.VK_H); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_E); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_L); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_L); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_O); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_SPACE); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_F); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_R); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_O); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_M); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_SPACE); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_G); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_E); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_E); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_K); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_S); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_F); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_O); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_R); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_G); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_E); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_E); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_K); 
		Thread.sleep(500); 
		robot.keyPress(KeyEvent.VK_S); 
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

