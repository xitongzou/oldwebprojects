
<!--

//Open offsite links in new window option- By Jessica Hammer
//Heavily modified by Dynamic Drive
//Visit http://www.dynamicdrive.com for this script

//1)Enter domains to be EXCLUDED from opening in new window:
var excludedomains=["dynamicdrive.com", "javascriptkit.com"]

//2)Automatically open offsite links in new window? (1=yes, 0 will render a checkbox for manual selection)
var auto=1

var excludedomains=excludedomains.join("|")
rexcludedomains=new RegExp(excludedomains, "i")

if (!auto)
document.write('<form name="targetmain"><input type="checkbox" name="targetnew" checked onClick="dynamiclink()">Open off-site links in new window</form>')

function dynamiclink(){

if (auto||(!auto&&document.targetmain.targetnew.checked)){
for (i=0; i<=(document.links.length-1); i++) {
if (document.links[i].hostname.search(rexcludedomains)==-1&&document.links[i].href.indexOf("http:")!=-1)
document.links[i].target="_blank"
}
}
else
for (i=0; i<=(document.links.length-1); i++) {
if (document.links[i].hostname.indexOf(mydomain)==-1)
document.links[i].target=""
}
}

if (auto)
window.onload=dynamiclink

// -->