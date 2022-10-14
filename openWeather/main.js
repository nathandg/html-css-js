feather.replace();

const sugestoesEl = document.querySelector('#sugestion');
const campoEl = document.querySelector('#insert-task');
const cidaddeEl = document.querySelector('#cidade');

const humidityEl = document.querySelector('#humidity');
const tempEl = document.querySelector('#temp');
const windEl = document.querySelector('#wind');

let destino = [];

const getListofcyties = async () => {

    const url = " https://servicodados.ibge.gov.br/api/v1/localidades/estados/41/municipios/ ";

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'Accept',
            'Access-Control-Allow-Origin': '*'
        }
    };

    const response = await fetch(url, options);
    const municipios = await response.json();

    municipios.forEach(municipio => {
        destino.push(municipio.nome);
    })

}


getListofcyties();

function autoComplete(cidade) {

    return destino.filter((valor) => {
        const valorMinusculo = valor.toLowerCase()
        const cidadeMinusculo = cidade.toLowerCase()

        return valorMinusculo.includes(cidadeMinusculo)
    })
}

campoEl.addEventListener('input', ({ target }) => {
    const dadosDoCampo = target.value
    sugestoesEl.innerHTML = '';

    if (dadosDoCampo.length) {

        const autoCompleteValores = autoComplete(dadosDoCampo)
        
        autoCompleteValores.forEach(valor => {

            addButton(valor);

        })

    }
})

const addButton = (cidade) => {
    const html = `<button onclick="searchWeather('${cidade}')">${cidade}</button>`;

    sugestoesEl.innerHTML += html;
} 


const searchWeather = async (cidade) => {

    sugestoesEl.innerHTML = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&APPID=ee4181be469e95dd23835ad46d185cd5`;

    const response = await fetch(url);
    const weather = await response.json();

    cidaddeEl.textContent = weather.name;
    humidityEl.textContent = `${weather.main.humidity}%`;
    tempEl.textContent = `${weather.main.temp}°C`;
    windEl.textContent = `${weather.wind.speed}km/h`;

    const img = `https://serpapi.com/search.json?q=Mapa${weather.name}&tbm=isch&ijn=0&api_key=bc4ab5315f77c816e305bdc2695c629d810499738e96e7c8c235eb9559320b6f`

    
    console.log(mapa);
    console.log(weather); 
}