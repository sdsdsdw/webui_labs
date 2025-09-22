function outDays() {
    let year = prompt("Введи рік народження:");
    let month = prompt("Введи місяць народження (1-12):") - 1;
    let day = prompt("Введи день народження:");

    let birthday = new Date(year, month, day);
    let now = new Date();

    let diff = now - birthday;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    let todayElement = document.getElementById("today");
    todayElement.textContent = "Ти прожив " + days + " днів.";
}
