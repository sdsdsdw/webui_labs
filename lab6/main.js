function doEvent(isOver) {
    cv = document.getElementById('pic');

    if (isOver)
        cv.src = "bigdaisy.jpg";
    else
        cv.src = "flower.jpg";
}