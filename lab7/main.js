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

// function displ() {
//     let p = document.getElementById('st');
    
//     if (p.style.display === 'none') {
//         p.style.display = 'block';
//     } else {
//         p.style.display = 'none';
//     }
// }


// let x = 0;

// const r1 = document.getElementById('im1');
// const r2 = document.getElementById('im2');

// window.onload = function() {
//     const x1 = r1.offsetWidth;
//     const x2 = r2.offsetWidth;
//     function f() {
//         x += 10;
//         r2.style.left = x + 'px';
//         if (x < x1 - x2) {
//             setTimeout(f, 700);
//         }
//     }
//     f();
// };

function f() {
    x = x + s;
    y = y + s;

    r2.style.left = x + 'px';
    r2.style.top  = y + 'px';

    if (x >= x1 - r2.offsetWidth || y >= y1 - r2.offsetHeight) s = -10;

    if (x <= 0 || y <= 0) s = 10;

    setTimeout("f()", 50);
}

let x = 0, y = 0, s = 10;
let r1 = document.getElementById('im1');
let r2 = document.getElementById('im2');
let x1, y1;

window.onload = function() {
    x1 = r1.offsetWidth;
    y1 = r1.offsetHeight;
    f();
};