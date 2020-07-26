<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="viewport" content="height=device-height, initial-scale=1">
<style>
html { overflow-y: hidden; overflow-x: hidden; } 
body  {
  display: block;
  margin-left: 0;
  margin-right: 0;
    width: 120vh;
  height: 120vh;

font-family: Comic Sans MS;
font-size: 14px;  
  
  
  border: 1px solid rebeccapurple;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 0;
  right: -11;
  bottom: 0;
  z-index: -1;
  display: flex;
  
  background-size: cover;
  //background-size: 118% 50% 
  background-image: 
  url(https://nsa40.casimages.com/img/2020/07/24/200724094335840847.png)
}  

//.Page {
//  position: relative;

//  display: block;
//    border: 5px solid rebeccapurple;
//  padding: 0px;
//  margin-top: 0px;
//  width: 650px;
//  height: 550px;
//   background-image: url(https://fr18.tentlan.com/img/startpage/wallpapers/wallpaper1.jpg
  
//}

//.image {

//  display: block;
//  width: 100%;
//  height: auto;
//  transition: .5s ease;

//}

div.Box1 {
display: block;

  position: absolute;
//   border: 1px solid black;
//  background-color: white;
  width: 30vh;
  min-height: 20vh;   
  margin-top: 140px;
  margin-left: 680px;
  z-index: 4;
   animation-name: colibri;
  animation-duration: 30s;
  animation-iteration-count: infinite;
}
@keyframes colibri {
  0%   {margin-left: 648px; margin-top: 140px; }
  5%  {margin-left:  340px;}
  10%  {margin-left:  320px;margin-top: 80px;width: 30vh}
  20% {margin-left:  -180px; margin-top: 200px;width: 0vh}
  100% {margin-left:  -180px;}  
  
}
.Box2 {
display: block;
  position: absolute;
//   border: 1px solid black;
//   opacity: 0.5;
//  background-color: white;
  width: 30vh;
  min-height: 20vh;  

  margin-top: 430px;
  margin-left: 530px;
}
.Box3 {
display: block;
  position: absolute;
   border: 1px solid black;
  width: 20vh;
  min-height: 10vh;  
  margin-top: 528px;
  margin-left: 470px;
}
.Box13 {
display: block;
  position: absolute;
  // border: 1px solid red;
  z-index: 5;
  margin-top: 528px;
  margin-left: 400px;
}
.text {
//  background-color: #4CAF50;
  color: white;
  font-size: 16px;

}
.Box4 {
//display: cover;
  position: absolute;
//   border: 2px solid black;
 // width: 30vh;
 // height: 10vh; 
  margin-top: -11px;
  margin-left: -11px;
}
.Box5 {
//display: cover;
  position: absolute;
//   border: 2px solid black;
  
  z-index: 2;
  margin-top: -11px;
  margin-left: 560px;
}
.Box6 {
display: cover;
  position: absolute;
//   border: 2px solid black;
  width: 16vh;
  height: auto;  
  margin-top: 60px;
  margin-left: 100px;
   animation-name: aigle;
  animation-duration: 20s;
  animation-iteration-count: infinite;  
}
@keyframes aigle {
  0%   {margin-left: 100px }

  100% {margin-left:  720px;}  
}
.Box7 {
display: cover;
  position: absolute;
//   border: 3px solid red;
  width: 16vh;
  height: auto;  
  margin-top: 150px;
  margin-left: 620px; // 720
  transform: scaleX(-1);
   animation-name: aigle2;
//   animation-play-state: paused;
  animation-duration: 20s;
  animation-iteration-count: infinite; 
  animation-timing-function: ease-in;
}
@keyframes aigle2 {
  0%   {margin-left: 620px; margin-top: 150px;transform: scaleX(-1);}
  30% {margin-left:  30px;margin-top: 50px;}  
  50% {margin-left:  30px;margin-top: 50px;width: 16vh;} 
  51% {margin-left:  30px;margin-top: 50px;transform: scaleX(1);width: 6vh;} 
  100%   {margin-left: 620px; margin-top: 100px;transform: scaleX(1);}
  
}
.Box8 {

//    border: 2px solid blue;
    margin-top: -11px;
    margin-left: 120px;
    position: absolute;
//    left: 400;
//    top: -15px;
    //overflow: hidden;
    z-index: 0;
    display: cover;
//    background-size: 30px 10px;
//  background: url(https://nsa40.casimages.com/img/2020/07/24/200724062134912653.png);
  animation: clouds_animation 50s linear infinite;
}
@keyframes clouds_animation {
  
  0%  {margin-left: 120px}
  100%  {margin-left: -1222px }
}
.Box9 {
display: cover;
  position: absolute;
 //  border: 3px solid red;
  //width: 16vh;
  //height: auto;  
  margin-top: 200px;
  margin-left: 560px; // 720

//   animation-name: colibri2;
//   animation-play-state: paused;
//  animation-duration: 20s;
//  animation-iteration-count: infinite; 
//  animation-timing-function: ease-in;
}
.Box10 {
display: cover;
  position: absolute;
 //  border: 3px solid red;
  //width: 16vh;
  //height: auto;  
  z-index: 2;
  margin-top: 20px;
  margin-left: 50px; // 720

//   animation-name: colibri2;
//   animation-play-state: paused;
//  animation-duration: 20s;
//  animation-iteration-count: infinite; 
//  animation-timing-function: ease-in;
}
.Box11 {
display: cover;
  position: absolute;
  // border: 3px solid red;
  //width: 16vh;
  //height: auto;  
  z-index: 3;
  margin-top: 16px;
  margin-left: 52px; // 720

//   animation-name: colibri2;
//   animation-play-state: paused;
//  animation-duration: 20s;
//  animation-iteration-count: infinite; 
//  animation-timing-function: ease-in;
}
//.Box11:active {
//border: 3px solid red;
//}
.Box12 {
display: cover;
  position: absolute;

  //width: 16vh;
  //height: auto;  
  z-index: 1;
  margin-top: 163px;
  margin-left: 372px; // 720
}
.Box12:active {
   border: 3px solid red;
animation-name:   bebe;
 //  animation-play-state: paused;
  animation-duration: 5s;
  animation-iteration-count: 1; 
  animation-timing-function: ease-in;
}
.Box12:focus {
   border: 3px solid red;
animation-name:   bebe;
 //  animation-play-state: paused;
  animation-duration: 5s;
  animation-iteration-count: 1; 
  animation-timing-function: ease-in;
}

@keyframes bebe {
  0%   {margin-left: 372px; margin-top: 163px}
  30% {margin-left:  400px;margin-top: 220px;}  
  100% {margin-left:  430px;margin-top: 560px;}
//  100% {margin-left:  430px;margin-top: 500px;}  
//  50% {margin-left:  30px;margin-top: 50px;width: 16vh;} 
//  51% {margin-left:  30px;margin-top: 50px;transform: scaleX(1);width: 6vh;} 
//  100%   {margin-left: 620px; margin-top: 100px;transform: scaleX(1);}
  
}
.tip {
	opacity: 0;
	filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);					/* Fucking IE */
	position: absolute;
	left: 90px;
	top: -20px;
	z-index: 30;
	padding: 0 20px;
	height: auto;   //40px;
	width: auto;
	border: solid 3px #191919;
	-webkit-border-radius:	16px;
	-moz-border-radius:	16px;
	-o-border-radius:	16px;
	border-radius:		16px;
	line-height: 40px;
	font-size: 14px;
    font-family: Comic Sans MS;
	font-weight: bold;
	color: white; //#191919;
	white-space: nowrap;
	text-shadow: 0 -1px 1px rgba(0,0,0,.6), 0 1px 1px rgba(255,255,255,1);
	background-color: rgba(255,255,255,.5);
	background-image:	-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,.27)), to(rgba(0,0,0,0)), color-stop(0.3, rgba(0,0,0,.27)));
	background-image:	-webkit-linear-gradient(top, rgba(0,0,0,.27) 30%, rgba(0,0,0,0));
	background-image:          -moz-linear-gradient(top, rgba(0,0,0,.27) 30%, rgba(0,0,0,0));
	background-image:	     -o-linear-gradient(top, rgba(0,0,0,.27) 30%, rgba(0,0,0,0));
	background-image:		linear-gradient(top, rgba(0,0,0,.27) 30%, rgba(0,0,0,0));
	-webkit-box-shadow:	inset 0 1px 1px rgba(255,255,255,.7), 0 4px 16px #191919;
	-moz-box-shadow:	inset 0 1px 1px rgba(255,255,255,.7), 0 4px 16px #191919;
	-o-box-shadow:		inset 0 1px 1px rgba(255,255,255,.7), 0 4px 16px #191919;
	box-shadow:		inset 0 1px 1px rgba(255,255,255,.7), 0 4px 16px #191919;
	-webkit-transform:	scale(0);
	-moz-transform:		scale(0);
	-o-transform:		scale(0);
	transform:		scale(0);
	-webkit-transition:	opacity .3s ease-in-out,top .3s ease-in-out,-webkit-transform 0s linear .4s;
	-moz-transition:	opacity .3s ease-in-out,top .3s ease-in-out,-moz-transform 0s linear .4s;
	-o-transition:		opacity .3s ease-in-out,top .3s ease-in-out,-o-transform 0s linear .4s;
	transition:		opacity .3s ease-in-out,top .3s ease-in-out,transform 0s linear .4s;
}
.hastip:hover .tip, .hastip:active .tip {
	opacity: 1;
	filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);				/* Fucking IE */
	top: -20px;
	z-index: 40;
	-webkit-transform:	scale(1);
	-moz-transform:		scale(1);
	-o-transform:		scale(1);
	transform:		scale(1);
	-webkit-transition:	opacity .3s ease-in-out, top .3s ease-in-out;
	-moz-transition:	opacity .3s ease-in-out, top .3s ease-in-out;
	-o-transition:		opacity .3s ease-in-out, top .3s ease-in-out;
	transition:		opacity .3s ease-in-out, top .3s ease-in-out;
}
.tip:before, .tip:after {
	content: '';
	display: block;
	position: absolute;
	//left: 11px;
    top: 50%;
    right: 100%;
	width: 0;
	height: 0;
    
   // margin-top: -5px;
   // border-width: 5px;
    
 
}
.tip:before {
	border: solid 15px transparent;
    border-color: transparent #191919 transparent transparent;
	//order-top-color: #191919;
	margin-top: -15px;
	bottom: -31px;
}
.tip:after {
	//border: solid 12px transparent;
	//margin-left: -12px;
	//bottom: -24px;
}
.red {
	text-shadow: 0 -1px 1px #600, 0 1px 1px #f00;
	background-color: #b00;
	-webkit-box-shadow:	inset 0 1px 1px #d00, 0 4px 16px #191919;
	-moz-box-shadow:	inset 0 1px 1px #d00, 0 4px 16px #191919;
	-o-box-shadow:		inset 0 1px 1px #d00, 0 4px 16px #191919;
	box-shadow:		inset 0 1px 1px #d00, 0 4px 16px #191919;
}
.red:after {
	border-top-color: #b00;
}
</style>
<script>

//var animationDiv = document.getElementsByClassName("Box12");
//var clickDiv = document.getElementsByClassName("Box12.image");
//clickDiv.addEventListener("click", function(){
//    if (animationDiv.style.animation == "") {
//        animationDiv.style.animation = " bebe .5s forwards";
//animationDiv.style.animation = " anim running  .1s infinite";
//    }else{
//        animationDiv.style.animation = ""; // assuming you want to toggle
//    }
       //console.log(animationDiv.style.animationplaystate);
//})
functionTest(){
alert("ok")
}
//function JouerSon(Num) {
//    var sound = document.getElementById("MonSon1")// + Num);
//    sound.play();
//document.getElementsByClassName("Box7").classList.remove("aigle2")//; = "running";
//document.getElementsByClassName("Box7")[0].style.width= "26vh";

//document.getElementsByClassName("Box7")[0].style.animation-name = "aigle2";

//document.getElementsByClassName("Box7").classList.toggle("aigle2")
//document.getElementsByClassName("Box7").style.animation-play-state = "running";
//}
</script>
</head>
<body>
<audio  id="MonSon1" src="https://lasonotheque.org/UPLOAD/wav/1673.wav"></audio>
<audio  id="MonSon2" src="https://lasonotheque.org/UPLOAD/wav/0873.wav"></audio>
 
<div class="Box13" onclick="functionTest()">
  <img src="https://nsa40.casimages.com/img/2020/07/25/200725111726190166.png"  class="image" style="width:58%;"   >
  <div class="text"></div>
  </div> 
 
<div class="Box12" ><a id="Box12" href="#Box12">
  <img src="https://i.goopics.net/xW9Ro.gif"  class="image" style="width:50%;"   ></a>
  <div class="text"></div>
  </div>
<div class="Box11" onclick="functionTest()"><a class="hastip" href="#" style="display:block;width:100%;height:100%;" onclick="functionTest()" >
  <img src="https://nsa40.casimages.com/img/2020/07/22/mini_200722095543227417.png"  class="image" style="width:60%;" onclick="functionTest()">
  ><span class="tip red">ceci est un tete long  dsdfd  dfdffd   dfdefdf<br>gfgsfgsfg sfdgfgfgjj fsdgdgdfdffd   dfdefdf<br>gfgsfgsfg sfdgfgfgjj fsdgdg</span>
   </a></div>
  <div class="Box10">
  <img src="https://nsa40.casimages.com/img/2020/07/22/mini_20072209545269148.png"  class="image" style="width:60%;">
  <div class="text"></div>
  </div>   
  <div class="Box9">
  <img src="https://img1.picmix.com/output/stamp/normal/1/3/2/3/483231_b326d.gif"  class="image" style="width:20%;">
  <div class="text"></div>
  </div> 
  <div class="Box8">
  <img src="https://nsa40.casimages.com/img/2020/07/24/200724102727436496.png"  class="image" style="width:100%;height:281px">
  <div class="text"></div>
  </div> 
  
  <div class="Box7">
  <img src="https://www.recreationspourtous.fr/img/images/aigle.gif"  class="image" style="width:100%">
  <div class="text"></div>
  </div>    
  <div class="Box6">
  <img src=" https://www.informatiquegifs.com/aigles/gifs-aigle-8.gif"  class="image" style="width:100%">
  <div class="text"></div>
  </div>  
  <div class="Box5">
  <img src="https://nsa40.casimages.com/img/2020/07/24/200724094418477150.png"  class="image5" style="width:100%;height:325px">
  <div class="text"></div>
  </div>
  <div class="Box4">
  <img src="https://nsa40.casimages.com/img/2020/07/24/200724074306459859.png"  class="image4" style="width:410px;height:280px">
  <div class="text"></div>
  </div>
  <div class="Box1">
  <img src="http://maguy69.m.a.pic.centerblog.net/4284274c.gif"  class="image" style="width:100%">
  <div class="text"></div>
  </div>
  <div class="Box2">
  <img src="http://bribriange49.b.r.pic.centerblog.net/56ff5923.gif"  class="image" style="width:100%">
    <div class="text"></div>
  </div>  
  <div class="Box3" onhover="JouerSon(1)">
  <img src="https://www.gifsanimes.com/data/media/292/araignee-image-animee-0001.gif"  onclick="JouerSon(1)">
    <div class="text" ></div>
  </div>   
   <a href="#" style="display:block;width:100%;height:100%;" onclick="functionTest()" >bbbbbbbbbbbbbbb</a>
</body>
</html>
