var x=document.getElementById("selectForm").selectedIndex;
var y=document.getElementById("selectForm").options;
alert(y[x].index);
if (y[x].index = 0) {
	window.location.href = "./gamefor2/game2.html";
}
else {
window.location.href = "./gamefor4/game4.html";
}
