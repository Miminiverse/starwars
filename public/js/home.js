
const baseUrls = 'https://www.swapi.tech/api/films/'
const filmList = document.querySelector('.film-list')
let output = ''


const handleErrors = res => {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
}

const renderFilms = (films) => {
    films.forEach(film => {
        let filmId = film.uid
        let filmData = film.properties
        output += `
        <div class="card-container">
            <div class="film-container">
                <div>
                    <div class="film-id">${filmId}</div>
                </div>
            </div>

                <div class="info-container">
                    <div class="film-name">
                    <a class="film-title" style="text-decoration:none" href="/film/${filmId}" > ${filmData.title} </a>
                    </div>
                    <div class="film-director">
                    ${filmData.director}
                    </div>
                </div>
      </div>

                `;

        filmList.innerHTML = output;

    })
}


function getFilms() {
    fetch(baseUrls)
        .then(handleErrors)
        .then((res) => res.json())
        .then(data => {
            renderFilms(data.result)
        })
        .catch(e => {
            console.log('Error')
            console.log(e)
        });
}

getFilms()


