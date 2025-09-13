function getName() {
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
}

// ----- task 2 ------

function getTime() {
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
}

// ----- task 3 ------

function drawTables() {
    const N = 10;

    const CON = document.getElementById("tables");
    CON.innerHTML = "";

    // ------ left
    let table1 = document.createElement("table");
    for (let i = 1; i <= N; i++) {
        let tr = document.createElement("tr");
        for (let j = 1; j <= N; j++) {
            let td = document.createElement("td");
            td.className = (i >= j) ? "orange" : "blue";
            tr.appendChild(td);
        }
        table1.appendChild(tr);
    }
    CON.appendChild(table1);

    // ------ right
    let table2 = document.createElement("table");
    for (let i = 0; i < N; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < N; j++) {
            let td = document.createElement("td");
            let patternIndex = (i + j) % 9;
            td.className = (patternIndex === 1 || patternIndex === 4 || patternIndex === 7) ? "pink" : "blue";
            tr.appendChild(td);
        }
        table2.appendChild(tr);
    }
    CON.appendChild(table2);
}