
<!--



// Array of day names

var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");



var monthNames = new Array("January","February","March","April","May","June","July",

                           "August","September","October","November","December");



var dt = new Date();

var y  = dt.getYear();



// Y2K compliant

if (y < 1000) y +=1900;



document.write(dayNames[dt.getDay()] + ", " + monthNames[dt.getMonth()] + " " + dt.getDate() + ", " + y);

// -->
