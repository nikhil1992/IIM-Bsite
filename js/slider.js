var slideimages = new Array() 
slideimages[0] = new Image() 
slideimages[0].src = "images/DSC_0266.jpeg" 
slideimages[1] = new Image()
slideimages[1].src = "images/IMG_3146.jpeg"
slideimages[2] = new Image()
slideimages[2].src = "images/IMG_3048.jpeg"

var step = 0;
var whichimage = 0;

function slideit(){
 
 if (!document.images)
  return;
 document.getElementById('slide').src = slideimages[step].src;
 whichimage = step;
 if (step<2)
  step++;
 else
  step=0;

 setTimeout("slideit()",2500)
}

function slidelink(){
 if (whichimage == 0)
  window.location = "images/DSC_0266.jpeg";
 else if (whichimage == 1)
  window.location = "images/IMG_3146.jpeg";
 else if (whichimage == 2)
  window.location = "images/IMG_3048.jpeg";
}

slideit();

/*---for side nav links in mobile---*/
function open_panel() {
slideIt();
var a = document.getElementById("sidebar");
a.setAttribute("id", "sidebar1");
a.setAttribute("onclick", "close_panel()");
}
/*
------------------------------------------------------------
Function to slide the sidebar form (open form)
------------------------------------------------------------
*/
function slideIt() {
var slidingDiv = document.getElementById("slider");
var stopPosition = 0;
if (parseInt(slidingDiv.style.right) < stopPosition) {
slidingDiv.style.right = parseInt(slidingDiv.style.right) + 2 + "px";
setTimeout(slideIt, 1);
}
}
/*
------------------------------------------------------------
Function to activate form button to close the slider.
------------------------------------------------------------
*/
function close_panel() {
slideIn();
a = document.getElementById("sidebar1");
a.setAttribute("id", "sidebar");
a.setAttribute("onclick", "open_panel()");
}
/*
------------------------------------------------------------
Function to slide the sidebar form (slide in form)
------------------------------------------------------------
*/
function slideIn() {
var slidingDiv = document.getElementById("slider");
var stopPosition = -420;
if (parseInt(slidingDiv.style.right) > stopPosition) {
slidingDiv.style.right = parseInt(slidingDiv.style.right) - 2 + "px";
setTimeout(slideIn, 1);
}
}