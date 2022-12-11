const characterlist = document.querySelector('.character-list')
let output = ''
let outputHomeWorld = ''

const handleErrors = res => {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
}

const renderHomeworld = (itemHomeworld) => {
    fetch(itemHomeworld)
        .then(handleErrors)
        .then((res) => res.json())
        .then(homeworldata => {
            let homeworldDetail = homeworldata.result.properties
            let homeworldId = homeworldata.result.uid
            console.log(homeworldId)
            outputHomeWorld =
                `<dl>
            <a class="homeworld-title" style="text-decoration:none"
            href='/planet/${homeworldId}'>${homeworldDetail.name}</a >
            </dl >
            `;
            homeworld.innerHTML = outputHomeWorld

        })
}


function getCharacterDetail() {
    const baseUrls = 'https://www.swapi.tech/api/people'
    let Id = location.pathname.split('/').pop()


    fetch(`${baseUrls}/${Id}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(data => {
            let characterDetail = data.result.properties
            let homeworldUrl = characterDetail.homeworld
            console.log(homeworldUrl)

            output = `

            <h1>${characterDetail.name}</h1>

            <dl class="row">

                <dt class="col-sm-2">Birth Year</dt>
                <dd class="col-sm-9">
                <p>${characterDetail.birth_year}</p>
                </dd>

                <dt class="col-sm-2">Gender</dt>
                <dd class="col-sm-9">
                <p>${characterDetail.gender}</p>
                </dd>

                <dt class="col-sm-2">Height</dt>
                <dd class="col-sm-9">
                <p>${characterDetail.height}</p>
                </dd>

                <dt class="col-sm-2">Mass</dt>
                <dd class="col-sm-9">
                  <p>${characterDetail.mass}</p>
                </dd>

                <dt class="col-sm-2">Hair Color</dt>
                <dd class="col-sm-9">
                  <p>${characterDetail.hair_color}</p>
                </dd>

                <dt class="col-sm-2">Skin Color</dt>
                <dd class="col-sm-9">
                  <p>${characterDetail.skin_color}</p>
                </dd>

                <dt class="col-sm-2">Eye Color</dt>
                <dd class="col-sm-9">
                  <p>${characterDetail.eye_color}</p>
                </dd>

                <dt class="col-sm-2">Home World</dt>
                <dd id="homeworld" class="col-sm-9">
                  <p></p>
                </dd>

              </dl>

                `;
            characterlist.innerHTML = output
            let homeworld = document.getElementById('homeworld')
            homeworld.innerHTML = "<p>Loading...";
            renderHomeworld(homeworldUrl)


        })
        .catch(e => {
            console.log('Error')
            console.log(e)
        })
}

getCharacterDetail()




