const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

const cardEl = document.querySelector(".card")
console.log(cardEl)

const colEl = document.querySelector(".col")
console.log(colEl)

const rowEl = document.querySelector(".row")
console.log(rowEl)



fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        data.forEach((img) => {
            const { url } = img
            console.log(url);

            const imgMarkUp = `
             <div class="row">
                <div class="col">
                    <div class="card">
                      <img src="${url}">
                      <img class="pin" src="./img/pin.svg">
                    </div>
                </div>
            </div>
            `
            rowEl.insertAdjacentHTML("beforeend", imgMarkUp)

        })
        console.log(data)

    }).catch(error => {
        console.error(error);
    });


