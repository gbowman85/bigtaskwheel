function createCookie(name,value,days) {
	if (days) {
        var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "expires="+date.toGMTString();
	} else {
        var date = new Date();
		date.setTime(date.getTime()+(30*24*60*60*1000));
		var expires = "expires="+date.toGMTString();
	}
	var cookie = name+"="+value+";"+expires+"; path=/host/0BzvmGqxzXWKvUGtRYm9IaEJsUW8";
	console.log(cookie);
    document.cookie = cookie;
}

function readCookie(name,defaultValue) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
	}
	return defaultValue;
}

function eraseCookie(name) {
	createCookie(name,"clear",-1);
}

function insertText(id,text) {
    document.getElementById(id).innerHTML=text;
}

function saveText(id){
    createCookie(id,document.getElementById(id).innerHTML);
}

function clearText() {
    
    for (var c=1;c<13;c++)
        {
            insertText('pod-'+c,'');
        }
    insertText('main-theme','');
    for (var i=1;i<13;i++)
        {
            saveText('pod-'+i);
        }
    saveText('main-theme');
    //document.location.reload(true);
}

function saveTextURL() {
    var sURL = window.document.URL.toString();
    
    if (sURL.indexOf("?") > 0) {
		var arrURL = sURL.split("?");
		var URLBase = arrURL[0];
	}
	else {
        var URLBase = sURL;
	}
	
	var params = 'main-theme='+document.getElementById('main-theme').innerHTML;
    for (var i=1;i<13;i++) {
        params +='&pod-'+i+'='+document.getElementById('pod-'+i).innerHTML ;
    }

	var URL = URLBase + "?"+ params +'%20';
	prompt('Copy this link (Crtl + C) and save it somewhere safe',URL);
}

window.onload=function() {
	var sURL = window.document.URL.toString();
	if (sURL.indexOf("?") > 0) {
		var arrParams = sURL.split('?').slice(1).join('?');
		var arrURLParams = arrParams.split("&");
		
		var arrParamNames = new Array(arrURLParams.length);
		var arrParamValues = new Array(arrURLParams.length);
		
		var i = 0;
		for (i=0;i<arrURLParams.length;i++) {
			var sParam =  arrURLParams[i].split("=");
			arrParamNames[i] = sParam[0];
			if (sParam[1] !== "")
				arrParamValues[i] = unescape(sParam[1]);
			else
				arrParamValues[i] = "No Value";
		}
		
		for (i=0;i<arrURLParams.length;i++){
			document.getElementById(arrParamNames[i]).innerHTML=arrParamValues[i];
		}
	}
};