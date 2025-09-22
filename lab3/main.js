function showDate() {
	var days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
	var months = ["січня", "лютого", "березня", "квітня", "травня", "червня",
				"липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

	var now = new Date();

	var weekday = days[now.getDay()];
	var day = now.getDate();
	var month = months[now.getMonth()];
	var year = now.getFullYear();

	var text = "Сегодня " + day + " " + month + " " + year + " " + weekday;

	document.getElementById("today").textContent = text;
}