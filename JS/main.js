const endpoint = "https://lanciweb.github.io/demo/api/pictures/"


const rowEl = document.querySelector(".row")
console.log(rowEl)

const overlayEl = document.querySelector(".overlay")
console.log(overlayEl)

const overlayContentEl = document.querySelector(".overlayContent")
console.log(overlayContentEl)

const closeBtnEl = document.querySelector(".closeBtn")
console.log(closeBtnEl)

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        data.forEach((img) => {
            let { title, url, date } = img
            console.log(title, url, date);

            const imgMarkUp = `
                <div class="col-sm col-md col-lg col-xl ">
                    <div class="card">
                    <h2>${title}</h2>
                      <img src="${url}">
                      <img class="pin" src="./img/pin.svg">
                      <h2>${date}</h2>
                    </div>
                </div>
            `
            rowEl.insertAdjacentHTML("beforeend", imgMarkUp)

        })
        console.log(data)

    }).catch(error => {
        console.error(error);
    });

//qui premo la card e mi esce lo sfondo ombrato con l'img selezionata
rowEl.addEventListener("click", () => {

    overlayEl.style.display = 'flex';
    //NON FUNZIONA

    //uso template literal 
    const imgMark = ` <div class="col-sm col-md col-lg col-xl ">
                    <div class="card">
                    <h2>${title}</h2>
                      <img src="${url}">
                      <h2>${date}</h2>
                    </div>
                </div> `
    overlayContentEl.insertAdjacentHTML("beforeend", imgMark)

});

// qui quando clicclo sul buttom, torna alla pagina principale
closeBtnEl.addEventListener('click', () => {
    overlayEl.style.display = 'none';
});


