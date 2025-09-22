function calcDistance() {
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;

    let distance = Math.sqrt(x * x + y * y);
 
    document.getElementById("result").textContent =
    	"Відстань до початку координат: " + distance.toFixed(2);
}