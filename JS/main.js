const endpoint = "https://lanciweb.github.io/demo/api/pictures/"


const rowEl = document.querySelector(".row")
console.log(rowEl)

const overlayEl = document.querySelector(".overlay")
console.log(overlayEl)

const imgOverlayEl = overlayEl.querySelector("img")

const overlayContentEl = document.querySelector(".overlayContent")
console.log(overlayContentEl)

const closeBtnEl = document.querySelector(".closeBtn")
console.log(closeBtnEl)

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        data.forEach((post) => {
            const { title, url, date } = post
            console.log(title, url, date);
            /*  const title = img.title
             const url = img.url
             const date = img.date */



            // const card = document.createElement('div') // <div></div>
            // card.classList.add('card')
            // card.addEventListener(....)
            // rowEl.appendChild(card)

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

        const cardsEl = document.querySelectorAll(".card")
        /* console.log(cardsEl) */
        cardsEl.forEach((card) => {
            card.addEventListener('click', () => {
                /* console.log(card); */
                const cardImg = card.querySelector('img')
                const cartTitle = card.querySelector('h2')
                console.log(cartTitle.innerText);


                /* console.log(cardImg); */
                imgOverlayEl.src = cardImg.src

                //     overlayContentEl.innerHTML = `

                //     <img src="${cardImgUrl}" style="width: 500px">
                // `;
                /*  console.log(cardImgUrl) */
                overlayEl.style.display = 'flex';
                /* const cardImgUrl = cardImg.src
                console.log(cardImgUrl); */
            })
        })

        closeBtnEl.addEventListener('click', () => {
            overlayEl.style.display = 'none';
        });

    }).catch(error => {
        console.error(error);
    });

// qui quando clicclo sul buttom, torna alla pagina principale


//qui premo la card e mi esce lo sfondo ombrato con l'img selezionata
/* rowEl.addEventListener("click", () => {

    overlayEl.style.display = 'flex'; */
//     //NON FUNZIONA

//uso template literal
/*   const imgMark = ` <div class="col-sm col-md col-lg col-xl ">
                   <div class="card">
                  <h2>${title}</h2>
                     <img src="${url}">
                     <h2>${date}</h2>
                   </div>
               </div> `


}); */

// qui quando clicclo sul buttom, torna alla pagina principale
/* closeBtnEl.addEventListener('click', () => {
    overlayEl.style.display = 'none';
});


 */