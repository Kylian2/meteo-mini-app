const date = document.getElementsByTagName('date');

ladate = new Date();

const bouton = document.getElementById('send');
const output = document.getElementById('output');
const input = document.getElementById('name')

const etat = document.getElementById('etat-card-1');
const ville = document.getElementById('ville-card-1');
const temperature = document.getElementById('temperature-card-1');

const humidite = document.getElementById('humidite-card-1');
const vent = document.getElementById('vent-card-1');
const precipitation = document.getElementById('precipitation-card-1');

const cardBottom = document.getElementById('bottom-card-1');

const cardTop = document.getElementById('top-card-1');

const test = document.getElementById('test');

const img = document.getElementById ('card-img-1');


bouton.onclick = () => {
    fetch("http://api.weatherstack.com/current?access_key=a2cb29abe564956e50a9aff527367acc&query=" + input.value)
        .then(reponse => reponse.json())
        .then(data =>{

            if (data.current.cloudcover > 60){
                cardTop.style.background = "#DFEAEE";
                img.src = ("img/nuage.svg");
            }else if ((data.current.precip > 5) && (data.current.temperature < 0)){
                cardTop.style.background = "#DFEAEE";
                img.src = ("img/neige.svg");
            }else if (data.current.temperature < 0){
                cardTop.style.background = "#DFEAEE";
                img.src = ("img/froid.svg");
            }else if (data.current.temperature > 25){
                img.src = ("img/soleil.svg");
            }else{
                img.src = ("img/soleil.svg");
            }

            ville.textContent = data.location.name + ", " + data.location.region;
            temperature.textContent = data.current.temperature + "°"  ;
            humidite.textContent = data.current.humidity + " %";
            vent.textContent = data.current.wind_speed + " km/h" + " " + data.current.wind_dir;
            precipitation.textContent = data.current.precip + " %";
            console.table(data)
        })


}



console.log(ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear())