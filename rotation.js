var rotation = 0;
var rotationInterval = 0.2;
var rotationTime = 400;
var clickSound = new Audio('bell.mp3');

function setRotationTime(mins){
    rotationTime = mins * 400 ;//150 movements per 30 degs, 60000ms per min
    var class1 = 'btn btn-default';
    var class2 = 'btn btn-default';
    var class3 = 'btn btn-default';
    console.log(mins);
    if (mins == 1) {
		class1 = 'btn btn-default active';
		console.log('1 pressed');
    } else if (mins == '2'){
		class2 = 'btn btn-default active';
		console.log('2 pressed');
    } else if (mins =='3'){
		class3 = 'btn btn-default active';
		console.log('3pressed');
    }
    console.log(class1 + " " + class2 + " " + class3);
    document.getElementById('1min').className = class1;
    document.getElementById('2min').className = class2;
    document.getElementById('3min').className = class3;
    
    console.log(document.getElementById(mins + 'min').className);
}


function rotate() {
    rotation = rotation + rotationInterval;
    document.getElementById('wheel').style.Transform='rotate('+rotation+'deg)';
    document.getElementById('wheel').style.webkitTransform='rotate('+rotation+'deg)';
    document.getElementById('wheel').style.msTransform='rotate('+rotation+'deg)';
    document.getElementById('wheel').style.mozTransform='rotate('+rotation+'deg)';
    document.getElementById('wheel').style.oTransform='rotate('+rotation+'deg)';
    var pods = document.getElementsByClassName('pod');
    for(var i = 0; i < pods.length; i++){
        pods[i].style.Transform='rotate('+(-1 * rotation)+'deg)';
        pods[i].style.webkitTransform='rotate('+(-1 * rotation)+'deg)';
        pods[i].style.msTransform='rotate('+(-1 * rotation)+'deg)';
        pods[i].style.mozTransform='rotate('+(-1 * rotation)+'deg)';
        pods[i].style.oTransform='rotate('+(-1 * rotation)+'deg)';
        if (rotation > 30 * (i+1) && rotation <30.2 * (i+1)) {
			pods[i].style.background = 'red';
			clickSound.play();
        }
    }
}

var count = 0;
function startRotation() {
    document.getElementById('rotate').style.display='none';
    document.getElementById('pause').style.display='inline-block';
    count = setInterval(rotate,rotationTime);
    //count = count + 1;
    console.log(count);
}

function pauseRotation() {
	document.getElementById('pause').style.display='none';
    document.getElementById('rotate').style.display='inline-block';
    clearInterval(count);
    console.log(count);
}

function resetRotation() {
    pauseRotation();
    rotation = 0;
    document.getElementById('wheel').style.Transform='rotate(0deg)';
    document.getElementById('wheel').style.webkitTransform='rotate(0deg)';
    document.getElementById('wheel').style.msTransform='rotate(0deg)';
    document.getElementById('wheel').style.mozTransform='rotate(0deg)';
    document.getElementById('wheel').style.oTransform='rotate(0deg)';
    var pods = document.getElementsByClassName('pod');
    for(var i = 0; i < pods.length; i++){
        pods[i].style.Transform='rotate(0deg)';
        pods[i].style.webkitTransform='rotate(0deg)';
        pods[i].style.msTransform='rotate(0deg)';
        pods[i].style.mozTransform='rotate(0deg)';
        pods[i].style.oTransform='rotate(0deg)';
        pods[i].style.background = '';
    }
}

function changeFontSize(fontvar) {
    var divs = document.getElementsByClassName("pod");
    var currentFont = divs[0].style.fontSize.replace("px", "");
    document.getElementById("main-theme").style.fontSize = parseInt(currentFont) + parseInt(fontvar) + 2 + "px";
	for(var i = 0; i < divs.length; i++){
		divs[i].style.fontSize = parseInt(currentFont) + parseInt(fontvar) + "px";
	}
}

function displayControls(option){
    if (option == 'show'){
        document.getElementById('text-controls').style.display="block";
        document.getElementById('time-controls').style.display="inline-block";
        document.getElementById('font-controls').style.display="inline-block";
        document.getElementById('hide-button').style.display="block";
        document.getElementById('show-button').style.display="none";
    }
    else if (option == 'hide'){
        document.getElementById('text-controls').style.display="none";
        document.getElementById('time-controls').style.display="none";
        document.getElementById('font-controls').style.display="none";
        document.getElementById('hide-button').style.display="none";
        document.getElementById('show-button').style.display="block";
    }
}