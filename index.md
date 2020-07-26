<!DOCTYPE html>
<html>
<body>

<p>Click the button to open an about:blank page in a new browser window that is 200px wide and 100px tall.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  var myWindow = window.open("https://fr18.tentlan.com/", "", );
  alert(myWindow)
}
</script>

</body>
</html>
