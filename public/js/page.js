const filmDetail = document.querySelector('.filmdetail-list')
let output = ''
let outputPlanet = ''
let outputCharacter = ''

const handleErrors = res => {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
}

const renderPlanet = (items) => {
    items.map(item => {
        fetch(item)
            .then(handleErrors)
            .then((res) => res.json())
            .then(planetdata => {
                let planetId = planetdata.result.uid
                let planetName = planetdata.result.properties.name
                outputPlanet +=
                    `<dl>
                    <a class="planet-title" style="text-decoration:none"
                    href='/planet/${planetId}'>${planetName}</a >
                    </dl >
                    `;
                planet.innerHTML = outputPlanet

            })
    })
}

const renderCharacter = (itemsCharacter) => {
    itemsCharacter.map(itemCharacter => {
        fetch(itemCharacter)
            .then(handleErrors)
            .then((res) => res.json())
            .then(characterData => {
                let characterId = characterData.result.uid
                let characterName = characterData.result.properties.name
                outputCharacter +=
                    `<dl>
            <a class="character-title" style="text-decoration:none"
            href='/character/${characterId}'>${characterName}</a >
            </dl >
            `;
                character.innerHTML = outputCharacter

            })
    })
}

function getFilmDetail() {
    const baseUrls = 'https://www.swapi.tech/api/films'
    let Id = location.pathname.split('/').pop()

    fetch(`${baseUrls}/${Id}`)
        .then(handleErrors)
        .then((res) => res.json())
        .then(data => {
            let filmDetailData = data.result.properties
            let planetUrls = filmDetailData.planets
            let characterUrls = filmDetailData.characters
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

            <dt class="col-sm-2">Characters</dt>
            <dd id='character'class="col-sm-9">
            </dd>

          </dl>

            `;
            filmDetail.innerHTML = output

            let planet = document.getElementById('planet')
            planet.innerHTML = "<p>Loading...";
            renderPlanet(planetUrls)

            let character = document.getElementById('character')
            character.innerHTML = "<p>Loading...";
            renderCharacter(characterUrls)

        })
        .catch(e => {
            console.log('Error')
            console.log(e)
        })
}

getFilmDetail()




