let surname = prompt("Введите свою фамилию:");
let name = prompt("Введите своё имя:");
let patronymic = prompt("Введите своё отчество:");

if (
    surname !== null && surname !== "" &&
    name !== null && name !== "" &&
    patronymic !== null && patronymic !== ""
) {
    let result = confirm(
        `${surname} ${name} ${patronymic}\nВсё верно?`
    );

    if (result) {
        alert(`Молодец,\n${surname} ${name} ${patronymic}`);
    }
} else {
    alert("Ошибка данных");
}

// ----- task 2 ------

let hours = parseInt(prompt("Введите количество часов: "));
let minutes = parseInt(prompt("Введите количество минут: "));

if (minutes < 59) {
    minutes = minutes + 1;
} else { // m == 59
    minutes = 0;
    if (hours < 23) {
        hours = hours + 1;
    } else {
        hours = 0;
    }
}

alert("Через минуту будет: " + hours + " час и " + minutes + " мин");

// ----- task 3 ------

let n = 10;

// ------  left
document.write("<table>");
for (let i = 1; i <= n; i++) {
    document.write("<tr>");
    for (let j = 1; j <= n; j++) {
        if (i >= j) {
            document.write("<td class='orange'></td>");
        } else {
            document.write("<td class='blue'></td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");

// ------ right
document.write("<table>");
for (let i = 0; i < n; i++) {
    document.write("<tr>");
    for (let j = 0; j < n; j++) {
        let patternIndex = (i + j) % 9;
        if (patternIndex === 1 || patternIndex === 4 || patternIndex === 7) {
            document.write("<td class='pink'></td>");
        } else {
            document.write("<td class='blue'></td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");