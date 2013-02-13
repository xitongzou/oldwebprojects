
function delayer(){
    window.location = "af.html"
}

var xmlhttp;
var page;
	
/**
 * creates the XMLHttpRequest object, based on what browser
 * is in use
 */
function createXMLHTTPObject() {
	if (window.XMLHttpRequest){
		// If IE7, Mozilla, Safari, etc: Use native object
		xmlhttp = new XMLHttpRequest()
	} else {
		if (window.ActiveXObject){
			// ...otherwise, use the ActiveX control for IE5.x and IE6
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
}

/**
 * Handles the http request for the page to be loaded
 */
function viewPage(page) {
	
	createXMLHTTPObject();
	 
	if (page == 'events.html' ||
		page == 'upcoming.html' ||
		page == 'future.html') {
		eventMenu("yes");
	} else {
		eventMenu("no");
	}
	
	xmlhttp.open('GET', page, true);
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				loadPage();
			} else {
				alert('Loading Error:\n [' + xmlhttp.status + '] ' + xmlhttp.statusText);
			}
		}
	}
	xmlhttp.send(null);
}

/**
 * Loads the response content in the page content div container
 */
function loadPage() {
	document.getElementById("pagecontent").innerHTML = xmlhttp.responseText;
}

/**
 * adds submenu for events if parameter is "yes", and removes it if "no" is
 * given as parameter
 */
function eventMenu(state) {
	if (state == "yes") {
		document.getElementById("sub_events").innerHTML = "<ul><li><span class='subevent' onclick=\"viewPage('upcoming.html')\">Upcoming</span></li><li><span class='subevent' onclick=\"viewPage('future.html')\">Future</span></li></ul>";
	} else {
		document.getElementById("sub_events").innerHTML = "";
	}
}

/**
 * Displays content on the feedback page according to what kind of communcation the user
 * has chosein the drop box to make
 */
function contactOptions(form) {
	var selectedIndex = form.contact_type.selectedIndex;
	
	if (selectedIndex == 1) {
		viewPage('contact_questions.html');
	} else if (selectedIndex == 2) {
		viewPage('contact_joinutf.html');
	} else {
		alert('Please select an option');
	}
}
/**
 * Submits the questions form, and returns the page from the 
 * submit questions script 
 */
function submitQuestion(form) {
	var name = encode(form.name.value);
	var email = encode(form.email.value);
	var comment = encode(form.comment.value);
	var urlparameters = "name=" + name + "&email=" + email + "&comment=" + comment;
	createXMLHTTPObject();
	
	page = "sendform.php?" + urlparameters;
	xmlhttp.open('POST', page, true);
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				loadPage();
			} else {
				alert('Loading Error:\n [' + xmlhttp.status + '] ' + xmlhttp.statusText);
			}
		}
	}
	xmlhttp.send(null);
	
}

/**
 * Submits the application form, and returns the page from
 * submit form script
 */
function submitAppForm(form) {
	var fname = encode(form.fname.value);
	var lname = encode(form.lname.value);
	var email = encode(form.email.value);
	var telephone = encode(form.telephone.value);
	var area = encode(form.area.value);
	var studentnum = encode(form.studentnum.value);
	var program = encode(form.program.value);
	
	var year = "none";
	// Check for radio value
	for (var i = 0; i < form.year.length; i++) {
		if (form.year[i].checked) {
			year = encode(form.year[i].value);
		}
	}
	var other = encode(form.other.value);
	
	// Check if required fields are filled in
	if (!validateFields(fname, lname, email, area, studentnum)) {
		return false;
	}
	
	var urlparameters = "fname=" + fname + "&lname=" + lname + "&email=" + email + "&telephone=" + telephone +
					"&area=" + area + "&studentnum=" + studentnum + "&program=" + program + "&year=" + year +
					"&other=" + other;
	
	page = "sendappform.php?" + urlparameters;
	xmlhttp.open('POST', page, true);
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {
				loadPage();
			} else {
				alert('Loading Error:\n [' + xmlhttp.status + '] ' + xmlhttp.statusText);
			}
		}
	}
	xmlhttp.send(null);
}

/**
 * Checks fields if they satisified requirements,
 * i.e. required fields filled in, field has right kind of info
 */
function validateFields(fname, lname, email, area, s_num) {
	var invalid = ""
	
	// Check if fields were left blank
	if (fname == "") { invalid += "First Name\n"; }
	if (lname == "") { invalid += "Last Name\n"; }
	if (email == "") { invalid += "Email Address\n"; }
	if (area == "Please select an area") { invalid += "Area\n"; } 
	if (s_num == "") { invalid += "Student Number\n"; }
	
	if (invalid == "") {
		return true;
	} else {
		invalid = "The following fields were not filled in:\n\n" + invalid;
		alert(invalid);
		return false;
	}
}

/**
 * Validates an email address, returns true if its a valid email
 * address and false otherwise
 */
function checkEmail(email) {
}

/**
 * Encodes the string paramter in a proper form
 * for url encoding use. ie space changed to +
 */
function encode(string) {
	var newString = string;
	
	newString.replace(" ", "+");
	newString.replace("@", "%40");
	newString.replace("(", "%28");
	newString.replace(")", "%29");
	return newString;
}