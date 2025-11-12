// let i = 0;

// function f() {
//     let r1 = document.getElementById('e1');
//     let r2 = document.getElementById('e2');

//     if (i === 0) {
//         r1.style.color = 'green';
//         r2.value = 'змінити на червоний';
//         i = 1;
//     } else {
//         r1.style.color = 'red';
//         r2.value = 'змінити на зелений';
//         i = 0;
//     }
// }

function displ() {
    let p = document.getElementById('st');
    
    if (p.style.display === 'none') {
        p.style.display = 'block';
    } else {
        p.style.display = 'none';
    }
}