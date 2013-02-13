<!--
// copyright 1999-2001 Idocs, Inc. http://www.idocs.com/tags/
// Distribute this script freely, but keep this 
// notice with the code.
var submitRolls = new Object();

function submitroll(src, oversrc, name)
{
this.src=src;
this.oversrc=oversrc;
this.name=name;
this.alt="Search";
this.write=submitroll_write;
}

function submitroll_write()
{
var thisform = 'document.forms[' + (document.forms.length - 1) + ']';
submitRolls[this.name] = new Object();
submitRolls[this.name].over = new Image();
submitRolls[this.name].over.src = this.oversrc;
submitRolls[this.name].out = new Image();
submitRolls[this.name].out.src = this.src;

document.write
	(
	'<A onMouseOver="if (document.images)document.images[\'' + this.name + "'].src=submitRolls['" + this.name + '\'].over.src"' + 
	' onMouseOut="if (document.images)document.images[\'' + this.name + "'].src=submitRolls['" + this.name + '\'].out.src"' + 
	' HREF="javascript:'
	);

if (this.sendfield)
	{
	if (! this.sendvalue)
		this.sendvalue = 1;
	document.write(thisform, ".elements['", this.sendfield, "'].value='", this.sendvalue, "';");
	}

document.write(thisform + '.submit();void(0);"');
if (this.msg)document.write(' onClick="return confirm(\'' , this.msg, '\')"');
document.write('>');

document.write('<IMG SRC="' + this.src + '" ALT="' + this.alt + '" BORDER=0 NAME="' + this.name + '"');
if (this.height)document.write(' HEIGHT=' + this.height);
if (this.width)document.write(' WIDTH='  + this.width);
if (this.otheratts)document.write(' ' + this.otheratts);
document.write('></A>');
if (this.sendfield)
	{
	document.write('<INPUT TYPE=HIDDEN NAME="' + this.sendfield + '">');
	document.forms[document.forms.length - 1].elements[this.sendfield].value='';
	}
}

//-->