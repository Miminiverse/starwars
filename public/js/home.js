
const baseUrls = 'https://www.swapi.tech/api/films/'
const filmList = document.querySelector('.film-list')
let output = ''

const renderFilms = (films) => {
    films.forEach(film => {
        let filmId = film.uid
        let filmData = film.properties
        output += `
        <div class="card-container">
            <div class="photo-container">
                <div class="date">
                    <div class="month">${filmId}</div>
                </div>
            </div>

                <div class="info-container">
                    <div class="event-name">
                    <a class="film-title" href="/post/${filmId}" > ${filmData.title} </a>
                    </div>
                    <div class="event-location">
                    ${filmData.director}
                    </div>
                </div>
      </div>

                `;

        filmList.innerHTML = output;

    })
}

// function errorHandler(err, clear = false) {
//     if (clear) {
//         document.querySelector("#errors").innerHTML = '';
//         return;
//     }
//     document.querySelector("#errors").innerHTML = `<p style="color:red;">${err}</p>`
// }

function getFilms() {
    fetch(baseUrls)
        .then((res) => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(data => {
            renderFilms(data.result)
        })
        .catch(e => {
            console.log('Error')
            console.log(e)
        });
}

getFilms()


