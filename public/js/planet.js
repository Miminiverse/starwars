const planetlist = document.querySelector('.planet-list')
let output = ''

const handleErrors = res => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
}

function getPlanetDetail() {
  const baseUrls = 'https://www.swapi.tech/api/planets'
  let Id = location.pathname.split('/').pop()


  fetch(`${baseUrls}/${Id}`)
    .then(handleErrors)
    .then(res => res.json())
    .then(data => {
      let planetDetail = data.result.properties

      output = `

            <h1>${planetDetail.name}</h1>

            <dl class="row">

                <dt class="col-sm-2">Population</dt>
                <dd class="col-sm-9">
                <p>${planetDetail.population}</p>
                </dd>

                <dt class="col-sm-2">Climate</dt>
                <dd class="col-sm-9">
                <p>${planetDetail.climate}</p>
                </dd>

                <dt class="col-sm-2">Terrain</dt>
                <dd class="col-sm-9">
                <p>${planetDetail.terrain}</p>
                </dd>

                <dt class="col-sm-2">Diameter</dt>
                <dd class="col-sm-9">
                  <p>${planetDetail.diameter}</p>
                </dd>

                <dt class="col-sm-2">Rotation Period</dt>
                <dd class="col-sm-9">
                  <p>${planetDetail.rotation_period}</p>
                </dd>

                <dt class="col-sm-2">Orbital Period</dt>
                <dd class="col-sm-9">
                  <p>${planetDetail.orbital_period}</p>
                </dd>

                <dt class="col-sm-2">Gravity</dt>
                <dd class="col-sm-9">
                  <p>${planetDetail.gravity}</p>
                </dd>

                <dt class="col-sm-2">Surface Water</dt>
                <dd class="col-sm-9">
                  <p>${planetDetail.surface_water}</p>
                </dd>

              </dl>

                `;
      planetlist.innerHTML = output

    })
    .catch(e => {
      console.log('Error')
      console.log(e)
    })
}

getPlanetDetail()




