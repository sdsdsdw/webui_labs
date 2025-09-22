// // example 1
// var today= new Date();
// var god = today.getYear();

// alert(god);


// // example 2
// var dr = new Date(1958, 4, 21);
// dn = dr.getDay()
// alert(dn)


// // example 3
// var dr = new Date(1958, 4, 21);
// var dn = dr.getDay();
// var dayn = new Array(
// 	'неділя',
// 	'понеділок',
// 	'вівторок',
// 	'середа',
// 	'четвер',
// 	"п'ятниця",
// 	'субота'
// );
// alert(dayn[dn]);


// // example 4
// function gd()
// {
// 	var today= new Date();
// 	var god=today.getYear();

// 	p1=document.getElementById('f1');
// 	p1.value=god;
// }


// // example 5
// today = new Date();

// var y = today.getYear(); 
// var yearBegin = new Date(y,0,1); 
// var d = today.getTime() - yearBegin.getTime(); 

// d = d / 86400000; 
// d = d + 1; 
// d = Math.floor(d); 

// document.write("<h2>Сьогодні " + d + " день з початку року</h2>");


// // example 6

// function sqr()
// {
// 	p = document.getElementById('t');
// 	r = p.value;
// 	var s = Math.PI * r * r;
// 	alert(s)
// }

// // -------- //

// function showDate() {
// 	var days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
// 	var months = ["січня", "лютого", "березня", "квітня", "травня", "червня",
// 				"липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

// 	var now = new Date();

// 	var weekday = days[now.getDay()];
// 	var day = now.getDate();
// 	var month = months[now.getMonth()];
// 	var year = now.getFullYear();

// 	var text = "Сегодня " + day + " " + month + " " + year + " " + weekday;

// 	document.getElementById("today").textContent = text;
// }

// function outDays() {
//     let year = prompt("Введи рік народження:");
//     let month = prompt("Введи місяць народження (1-12):") - 1; // уменьшаем на 1
//     let day = prompt("Введи день народження:");

//     let birthday = new Date(year, month, day);
//     let now = new Date();

//     let diff = now - birthday;
//     let days = Math.floor(diff / (1000 * 60 * 60 * 24));

//     let todayElement = document.getElementById("today");
//     todayElement.textContent = "Ти прожив " + days + " днів.";
// }

function calcDistance() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;

    let distance = Math.sqrt(x * x + y * y);
 
    document.getElementById("result").textContent =
    	"Відстань до початку координат: " + distance.toFixed(2);
}