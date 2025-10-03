document.addEventListener('DOMContentLoaded', () => {
    const titleInput = document.getElementById('title');
    const captionInput = document.getElementById('caption');
    const radios = document.querySelectorAll("input[name='pic']");

    const data = {
        "dog.jpg": {
            title: "Собака друг человека!",
            caption: "Я теж завів собі вірного пса, собаку який мене розуміє."
        },
        "flower.jpg": {
            title: "Одинокий цветок",
            caption: "Красивий, але крихкий символ природи."
        },
        "bqf.jpg": {
            title: "Букет для тебе",
            caption: "Дарую цей букет як знак поваги та любові."
        }
    };

    radios.forEach(r => {
        r.addEventListener('change', (e) => {
            if (e.target.checked) {
                const selected = data[e.target.value];
                titleInput.value = selected.title;
                captionInput.value = selected.caption;
            }
        });
    });
});

function showPage() {
    const title = document.getElementById('title').value;
    const caption = document.getElementById('caption').value;
    const bgcolor = document.getElementById('bgcolor').value;
    const textcolor = document.querySelector("input[name='textcolor']:checked").value;
    const pic = document.querySelector("input[name='pic']:checked").value;

    const win = window.open("", "_blank", "width=600,height=400");
    win.document.write(
    `
        <!DOCTYPE html>
        <html>
        <head><title>${title}</title></head>
        <body style="background:${bgcolor}; color:${textcolor}; text-align:center; font-family:sans-serif;">
          <h2>${title}</h2>
          <img src="${pic}" alt="" style="max-width:300px;"><br>
          <p>${caption}</p>
          <button onclick="window.close()">Закрити</button>
        </body>
        </html>
    `);
    
    win.document.close();
}