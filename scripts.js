fetch('../images.json')
        .then((response) => response.json())
        .then((json) => { 
            let aside = document.querySelector("#info").querySelectorAll("dd")[2], r = Math.floor(Math.random()*10);
            r < Object.keys(json).length ? r = r : r = 0;
            aside.innerHTML = `<a href="Img.html?id=${r}"><img src="${json[r].link}"></a>
                                <p><b>Author: </b>${json[r].Author}</p>
                                <p><b>Description:</b>${json[r].desc}</p>`;
});