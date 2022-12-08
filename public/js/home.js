
const baseUrls = 'https://www.swapi.tech/api/films/'
const filmlist = document.querySelector('.film-list')
let output = ''

const renderFilms = (posts) => {
    posts.forEach(post => {
        let postId = post.uid
        output += `
        <div class="card-container">
            <div class="photo-container">
                <div class="date">
                    <div class="month">${postId}</div>
                </div>
            </div>

                <div class="info-container">
                    <div class="event-name">
                    <a href="/${postId}" > ${post.properties.title} </a>
                    </div>
                    <div class="event-location">
                    ${post.properties.director}
                    </div>
                </div>
      </div>

                `;

        filmlist.innerHTML = output;

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
    // .catch(error => {
    // //     errorHandler(error.error_type)
    // });
}

getFilms()


