var mess = new Array("", 
    "Вимкнення комп'ютера",
    "Видалення файлів із системного диска",
    "Форматування вінчестера"
);

function doEvent(num)
{
    cv=document.getElementById('info');
    cv.value= mess[num];
}