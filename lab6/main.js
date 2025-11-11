let i = 0;

function slideShow() {
  const ris = ['7.png', '8.png', '9.png', '6.png'];

  if (i >= ris.length) {
    i = 0;
  }

  const r = document.getElementById('slide');
  r.src = ris[i];
  i++;

  setTimeout(slideShow, 1500);
}
