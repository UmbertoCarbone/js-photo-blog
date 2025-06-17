const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

console.log(endpoint)

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data)

    }).catch(error => {
        console.error(error);
    });

