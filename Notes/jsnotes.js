var pics = ["images/giphy1.gif" , "images/giphy2.gif" , "images/giphy3.gif" , "images/giphy4.gif"]

function replace(){
	var text = "";
	for(var i = 0; i< pics.length; i++){
		text += "<img src = '" + pics[i] + "' />"
	}
	document.write(text)
}

function randPic(){
	document.getElementById("disImg").src = 
		pics[Math.floor(Math.random()* pics.length)];
}
function changebackgroundrandom(){
	var color = "rgb("+ (Math.floor(Math.random()*256)) + "," +
	(Math.floor(Math.random()*256)) + "," +
	(Math.floor(Math.random()*256))+ ")"
	document.body.style.background = color;
}

function changeBackground(){
	document.body.style.background = "red";
}
function toggleBackground(){
	if(document.body.style.background == "red"){
		document.body.style.background = "blue";
	}
	else{
		document.body.style.background = "red";
	}
}

function alertMe(){
	alert("I have been alerted");
}

function imgToggle(){
	if(document.getElementById("disImg").style.visibility == "visible"){
		document.getElementById("disImg").style.visibility = "hidden";
	}
	else{
		document.getElementById("disImg").style.visibility = "visible";
	}
}

function addText(){
	var text = document.getElementById("aPlace").innerHTML;
	text += '<marquee><img id = "disImg" src = "[REDACTED].jpg"/></marquee>';
	document.getElementById("aPlace").innerHTML = text;
}
