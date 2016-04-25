/* Code from chapter 2 */
function showText(inputdata){ 
	window.alert(inputdata); 
}

function buildPage(){
	var pagecontent = "<html><head><title>";
	pagecontent += document.pageform.pagetitle.value;
	pagecontent += "</title></head>\n";
	pagecontent += "<body bgcolor='white'>\n";
	pagecontent += document.pageform.bodytext.value;
	pagecontent += "\n</body>\n</html>";

	document.pageform.mycode.value=pagecontent;
}
/* End of code from chapter 2 */


/* Code from chapter 3 */
/* Code to manipulate values from form objects */
function getRadioValue(formname,radioname){
    var theRadioButtons = document[formname][radioname];
    for (i=0;i<theRadioButtons.length;i++){
        if (theRadioButtons[i].checked){
            return theRadioButtons[i].value;
        }
    }
}

function showRadioValue(formname,radioname,thevalue){
    var theRadioButtons = document[formname][radioname];
    for (i=0;i<theRadioButtons.length;i++){
        var temp = theRadioButtons[i].value;
        if (temp == thevalue){
            theRadioButtons[i].checked = true;
        }
    }   
}

function getSelectValue(formname,selectname){
    var theMenu = document[formname][selectname];
    var selecteditem = theMenu.selectedIndex;
    return theMenu.options[selecteditem].value;
}

function showSelectValue(formname,selectname,thevalue){
    var theMenu = document[formname][selectname];
    for (i=0;i<theMenu.options.length;i++){
        var temp = theMenu.options[i].value;
        if (temp == thevalue){
            theMenu.selectedIndex = i;
        }
    }   
}

/* End of code to manipulate values from form objects */
/* End of code from chapter 3 */

/* Code from chapter 6 */
/* Essential Arrays for pages with calendars */
var theDays = new Array();
theDays[0]="Sunday";
theDays[1]="Monday";
theDays[2]="Tuesday";
theDays[3]="Wednesday";
theDays[4]="Thursday";
theDays[5]="Friday";
theDays[6]="Saturday";

var theMonths = new Array();
theMonths[0]="January";
theMonths[1]="February";
theMonths[2]="March";
theMonths[3]="April";
theMonths[4]="May";
theMonths[5]="June";
theMonths[6]="July";
theMonths[7]="August";
theMonths[8]="September";
theMonths[9]="October";
theMonths[10]="November";
theMonths[11]="December";
/* End of code from chapter 6 */

/* Code from chapter 7 */
/* Beginning of Cookie Code Based on code by Bill Dortch
   of hidaho designs who has generously placed it in the public domain.*/
function SetCookie(name,value,expires,path,domain,secure){
	var temp = name + "=" + escape(value);
	if (expires){
		temp += "; expires=" + expires.toGMTString();
	}
	if (path){
		temp += "; path=" + path;
	}
	if (domain){
		temp += "; domain=" + domain;
	}
	if (secure){
		temp += "; secure";
	}
	document.cookie = temp;
}
function GetCookie(name){
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i,j) == arg){
			return getCookieVal(j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}
function getCookieVal(offset){
	var endstr = document.cookie.indexOf(";", offset);
	if (endstr == -1){
		endstr = document.cookie.length;
	}
	return unescape(document.cookie.substring(offset,endstr));
}
function DeleteCookie (name,path,domain) {
  if (GetCookie(name)) {
    var temp = name + "=";
    temp += ((path) ? "; path=" + path : "");
    temp += ((domain) ? "; domain=" + domain : "");
    temp += "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    document.cookie = temp;
  }
}
/* End of Cookie Code */

/* converts days to milliseconds */
function daysToMS(days){
	return days * 24 * 60 * 60 * 1000;
}

/* converts weeks to milliseconds */
function weeksToMS(weeks){
	return weeks * 7 * 24 * 60 * 60 * 1000;
}

/* converts years to milliseconds */
function yearsToMS(years){
	return years * 365.25 * 24 * 60 * 60 * 1000;
}
/* End of code from chapter 7 */


/* code from chapter 8 */
var myWindow = null;
function openWin(url,targetname,W,H,L,T,thefeatures) {
    var params = "";
    var nofeatures = "toolbar=0,location=0,directories=0,status=0,";
    nofeatures += "menubar=0,scrollbars=0,resizable=0,copyhistory=0";
    var basicfeatures = "scrollbars=1,resizable=1,menubar=1 ";
    var morefeatures = "toolbar=1,location=1,directories=1,";
	morefeatures += "status=1,copyhistory=1";
    var dimensions = "width=" + W + ",height=" + H;
    /* Callout: The placement variable contains values for left/top and screenX/screenY. Use both to ensure compatibility with all browsers. */
    var placement = "left="  + L + ",top=" + T;
    placement += ",screenX="  + L + ",screenY=" + T;
    
    /* Callout: The switch control structure makes decisions that depend on the value of a variable. In this case the value of the parameter variable thefeatures determines the value of the variable params. */
    switch (thefeatures){
        case "none":
            params += nofeatures;
            break;
        case "basic":
            params += basicfeatures;
            break;
        case "full":
            params += basicfeatures + "," + morefeatures;
            break;
        default:
            params += thefeatures;
    }
    /* Adds the dimensions and placement info to the params variable. */
    params += "," + dimensions + "," + placement;
    /* The window.open()method  creates myWindow. */
    myWindow = window.open(url,targetname,params);
}

function closeWin(){
    if (myWindow != null){
        myWindow.close();
        myWindow = null;    
    }
}
/* End of openWin() and closeWin() functions for mylibrary.js file */
/* End of code from chapter 8 */

/* code from chapter 9 */
/* Add this browser detection code to mylibrary.js */
/* Callout: theApp will contain the browser name */
var theApp = navigator.appName.toLowerCase();

/* Callout: UA for user agent will contain more detailed browser info. For example, UA for Internet Explorer on Mac would be 'mozilla/4.0 (compatible; msie 5.0; mac_powerpc)' */
var UA = navigator.userAgent.toLowerCase();

/* variables for the two major browsers in existence today. */
var isIE = (UA.indexOf('msie') >= 0) ? true : false;
var isNS = (UA.indexOf('mozilla') >= 0) ? true : false;

// 'compatible' text string exists only in non-Netscape browsers
if (UA.indexOf('compatible')>0){
	isNS = false;
}

// platform
var thePlatform = navigator.platform.toLowerCase();
var isMAC = (UA.indexOf('mac') >= 0) ? true : false;
var isWIN = (UA.indexOf('win') >= 0) ? true : false;

/* Most UNIX users use X-Windows so this detects UNIX most of the time.*/
var isUNIX = (UA.indexOf('x11') >= 0) ? true : false;

// browser version
var version = navigator.appVersion;
var isMajor = parseInt( version );
// Internet Explorer version 5 on the Mac reports itself as version 4
if(isIE && isMAC) {
	if(UA.indexOf("msie 5")) {
		isMajor = 5;
		var stringLoc = UA.indexOf("msie 5");
		version = UA.substring(stringLoc + 5, stringLoc + 8);
	}
}

// Netscape 6 reports itself as version 5
if(isNS && isMajor>4) {
	if(UA.indexOf("netscape6")) {
		isMajor = 6;
		var stringLoc = UA.indexOf("netscape6");
		version = UA.substring(stringLoc + 10, stringLoc + 14);
	}
}
var isMinor = parseFloat( version );

var obsolete = (document.getElementById) ? false : true;
/* End of browser detection code */
/* End of code from chapter 9 */