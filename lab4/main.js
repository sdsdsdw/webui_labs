function createBio() {
    var name = document.getElementById('name').value;
    var birth = document.getElementById('birth').value;
    var city = document.getElementById('city').value;
    var hobby = document.getElementById('hobby').value;

    var win = window.open("", "", "width=500, height=500");
    win.document.open();

    win.document.write("<html><head><title>Біографія</title></head><body style='background-color:LightYellow; font-family:Arial;'>");
    win.document.write("<h1 style='color:blue; text-align:center;'>Біографія</h1><hr>");

    win.document.write("<p><b>Ім'я:</b> " + name + "</p>");
    win.document.write("<p><b>Дата народження:</b> " + birth + "</p>");
    win.document.write("<p><b>Місто:</b> " + city + "</p>");
    win.document.write("<p><b>Хобі:</b> " + hobby + "</p>");
    win.document.write("<hr>");
    win.document.write("<h3 style='color:green;'>Коротка біографія:</h3>");
    win.document.write("<p>" + name + " народився " + birth + " у місті " + city + ". У вільний час захоплюється: " + hobby + ".</p>");

    win.document.write("<br><input type='button' value='Закрити' onclick='window.close();'>");

    win.document.write("</body></html>");
    win.document.close();
}