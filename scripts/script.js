const elements = [];
var video;
var startGameButton;
var signInButton;
var gamePage;




class City{
    constructor(name, lat, long){
        this.name =name;
        this.lat = lat;
        this.long = long;
    }

}

var city = new City("", 0, 0);

function main(){
    video = document.getElementById('video');
    elements.push(video);
    gamePage = document.getElementById('game');
    elements.push(gamePage);
    video.playbackRate = 0.9;
}


function startGame(){
    getRandomCity();
    loadGamePage();
}

function getRandomCity(){
    getNumberOfCities(); //rename

    
    setTimeout(null,2000);

}

function getNumberOfCities(){

    var request = new XMLHttpRequest();

    var url = 'http://geodb-free-service.wirefreethought.com/v1/geo/cities?hateoasMode=off';

    request.open("GET", url, true);

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var parsedResponse = JSON.parse(this.responseText); 
            console.log(parsedResponse);
            nbCities = parsedResponse.metadata.totalCount;
            generateCityNumber(nbCities) ;
        }
    }
    request.send();
}

function generateCityNumber(){
    var cityNumber= Math.floor(Math.random() * nbCities);
    getCity(cityNumber);
}

function getCity(cityNumber){
    var request = new XMLHttpRequest();

    var url = 'http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=1&offset=' + cityNumber + '&hateoasMode=off';

    request.open("GET", url, true);

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var parsedResponse = JSON.parse(this.responseText); 
            console.log(parsedResponse);
            console.log(parsedResponse.data[0].name);
            city = new City(parsedResponse.data[0].name, parsedResponse.data[0].latitude, parsedResponse.data[0].longetitude);
            var cityName = document.getElementById('cityName');
            cityName.textContent= (city.name);
        }
    }   

    request.send();
}

function loadGamePage(){
    transition();
    var map = L.map('map').setView([51.505, -0.09], 2);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


}

function transition(){

}

function hideElements(){
    var divsToHide = document.getElementsByClassName("hide"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    // alert(elements);
    // for (let x in elements){
    //     elements[x].hidden = true;
    // }
}

