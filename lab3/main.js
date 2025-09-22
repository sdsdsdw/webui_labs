// example 1
var today= new Date();
var god = today.getYear();

alert(god);


// example 2
var dr = new Date(1958, 4, 21);
dn = dr.getDay()
alert(dn)


// example 3
var dr = new Date(1958, 4, 21);
var dn = dr.getDay();
var dayn = new Array(
	'неділя',
	'понеділок',
	'вівторок',
	'середа',
	'четвер',
	"п'ятниця",
	'субота'
);
alert(dayn[dn]);


// example 4
function gd()
{
	var today= new Date();
	var god=today.getYear();

	p1=document.getElementById('f1');
	p1.value=god;
}


// example 5
today = new Date();

var y = today.getYear(); 
var yearBegin = new Date(y,0,1); 
var d = today.getTime() - yearBegin.getTime(); 

d = d / 86400000; 
d = d + 1; 
d = Math.floor(d); 

document.write("<h2>Сьогодні " + d + " день з початку року</h2>");


// example 6

function sqr()
{
	p = document.getElementById('t');
	r = p.value;
	var s = Math.PI * r * r;
	alert(s)
}

// -------- //