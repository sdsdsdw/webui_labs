// function doEvent(isOver) {
//     cv = document.getElementById('pic');

//     if (isOver)
//         cv.src = "bigdaisy.jpg";
//     else
//         cv.src = "flower.jpg";
// }

// --------------------------------------

// var mess = new Array("", 
//     "Вимкнення комп'ютера",
//     "Видалення файлів із системного диска",
//     "Форматування вінчестера"
// );

// function doEvent(num)
// {
//     cv=document.getElementById('info');
//     cv.value= mess[num];
// }


// --------------------------------------

// let i = 0;

// function slideShow() {
//   const ris = ['7.png', '8.png', '9.png', '6.png'];

//   if (i >= ris.length) {
//     i = 0;
//   }

//   const r = document.getElementById('slide');
//   r.src = ris[i];
//   i++;

//   setTimeout(slideShow, 1500);
// }

// --------------------------------------


const cars = [
	"",
	"Renault Alpine A110 — $200,000",
	"Land Rover Range SUV — $20,000",
	"BMW M3 — $50,000",
	"Alfa Romeo 4C Coupé — $60,000"
];

const slides = ['car1.jpg', 'car2.jpg', 'car3.jpg', 'car4.jpg'];
let index = 0;

function showInfo(num) {
	document.getElementById("info").value = cars[num];
}


function nextSlide() {
	index++;

	if (index >= slides.length) 
		index = 0;

	document.getElementById('slide').src = slides[index];
}