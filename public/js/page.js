const filmDetail = document.querySelector('.filmdetail-list')
let output = ''
let outputPlanet = ''
let outputCharacter = ''


const renderPlanet = (items) => {
    items.map(item => {
        fetch(item)
            .then(res => res.json())
            .then(planetdata => {
                let planetId = planetdata.result.uid
                let planetName = planetdata.result.properties.name
                outputPlanet +=
                    `<dl>
                    <a class="planet-title" 
                    href='/planet/${planetId}'>${planetName}</a >
                    </dl >
                    `;
                planet.innerHTML = outputPlanet
            })
    })
}

function getFilmDetail() {
    const baseUrls = 'https://www.swapi.tech/api/films'
    let Id = location.pathname.split('/').pop()

    fetch(`${baseUrls}/${Id}`)
        .then(res => res.json())
        .then(data => {
            let filmDetailData = data.result.properties
            let planetUrls = filmDetailData.planets

            output = `

            <h1>${filmDetailData.title}</h1>

            <dl class="row">
            <dt class="col-sm-2">Producer</dt>
            <dd class="col-sm-9">
            <p>${filmDetailData.producer}</p>
            </dd>

            <dt class="col-sm-2">Director</dt>
            <dd class="col-sm-9">
            <p>${filmDetailData.director}</p>
            <dt class="col-sm-2">Release Date</dt>
            <dd class="col-sm-9">
            <p>${filmDetailData.release_date}</p>

            </dd>
          
            <dt class="col-sm-2">Opening Crawl</dt>
            <dd class="col-sm-9">
              <p>${filmDetailData.opening_crawl}</p>
              
            </dd>
      
            <dt class="col-sm-2">Planets</dt>
            <dd id='planet'class="col-sm-9">
            </dd>

          </dl>

            `;
            filmDetail.innerHTML = output

            let planet = document.getElementById('planet')
            planet.innerHTML = "<p>Loading...";

            renderPlanet(planetUrls)
        })
        .catch(e => {
            console.log('Error')
            console.log(e)
        })
}

getFilmDetail()




