const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

const cardEl = document.getElementById("card")
console.log(cardEl)

const colEl = document.getElementById("col")
console.log(colEl)

const rowEl = document.getElementById("row")
console.log(rowEl)



fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data)


    }).catch(error => {
        console.error(error);
    });


