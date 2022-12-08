const filmlist = document.querySelector('.film-list')
let output = ''
let outputPlanet = ''
let outputCharacter = ''


function getFilmsDetail() {
    const baseUrls = 'https://www.swapi.tech/api/films'
    let Id = location.pathname
    console.log(Id)

    let url = `${baseUrls}${Id} `

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const postDetail = data.result
            const planetUrls = postDetail.properties.planets

            // planetUrls.forEach((planetUrl) => {
            //     const stringplanetUrl = JSON.stringify(planetUrl)
            //     const planetId = stringplanetUrl.split("/").pop();
            //     const baseUrl = 'https://www.swapi.tech/api/planets/'
            //     const urlDetail = `${baseUrl}${planetId}`

            // })


            output = `

            <h1>${postDetail.properties.title}</h1>

            <dl class="row">
            <dt class="col-sm-2">Producer</dt>
            <dd class="col-sm-9">
            <p>${postDetail.properties.producer}</p>
            </dd>

            <dt class="col-sm-2">Director</dt>
            <dd class="col-sm-9">
            <p>${postDetail.properties.director}</p>
            <dt class="col-sm-2">Release Date</dt>
            <dd class="col-sm-9">
            <p>${postDetail.properties.release_date}</p>

            </dd>
          
            <dt class="col-sm-2">Opening Crawl</dt>
            <dd class="col-sm-9">
              <p>${postDetail.properties.opening_crawl}</p>
              
            </dd>
      
            <dt class="col-sm-2">Planets</dt>
            <dd id='planet'class="col-sm-9">
            </dd>

            <dt class="col-sm-2">#</dt>
            <dd id='character'class="col-sm-9">
            </dd>
          </dl>

            `;
            filmlist.innerHTML = output

            const planet = document.getElementById('planet')
            planet.innerHTML = "<p>Loading...";


            planetUrls.map(planetUrl => {
                fetch(planetUrl)
                    .then(res => res.json())
                    .then(planetdata => {
                        let planetId = planetdata.result.uid
                        let planetName = planetdata.result.properties.name
                        outputPlanet += `
                    <dl>
                        <a style="font-size:17px" 
                        href='/planet/${planetId}' target='_blank'>${planetName}</a >
                    </dl >

                            `;
                        planet.innerHTML = outputPlanet
                    })
            })



            // Promise.all(
            //     planetUrls.map(planetUrl => {
            //         return new Promise((resolve) => {
            //             fetch(planetUrl)
            //                 .then(res => {
            //                     return new Promise(() => {
            //                         res.json()
            //                             .then(planetdata => {
            //                                 var planetName = planetdata.result.properties.name
            //                                 resolve()
            //                                 var planet = document.getElementById('planet')
            //                                 outputPlanet += `
            //                                 <dl>
            //                                     <a style="font-size:17px" 
            //                                     href='${planetName}' target='_blank'>${planetName}</a>
            //                                 </dl>

            //                                 `;
            //                                 planet.innerHTML = outputPlanet
            //                             })
            //                     })
            //                 })
            //                 .catch(e => {
            //                     console.log(e)
            //                 })
            //         })
            //     })
            // )

        })
        .catch(e => {
            console.log('Error')
            console.log(e)
        })
}

getFilmsDetail()




