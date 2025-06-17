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

        console.log(data)

    }).catch(error => {
        console.error(error);
    });


