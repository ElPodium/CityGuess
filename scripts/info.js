var confirmerButton;
var map;
var latlngfind;
var cityfind;
var moinButton;
var easyButton;
var tour;
var score;
var distances;
var markers = new Array();

function main(){
    $("#VilleInformation").css('visibility','hidden');
    map = L.map('map').setView([51.505, -0.09], 7);
    moinButton = document.getElementById("minus");
    moinButton.addEventListener("click", PageMoin);
    score = 0;
    tour = 1;
    mapleeflet();
}

function mapleeflet(){
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    noWrap: true, 
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    map.on('click', onMapClick);
}

function PageMoin(){
    var divsToHide = document.getElementsByClassName("hide"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    moinButton.innerHTML = "+";
    moinButton.removeEventListener("click", PageMoin);
    moinButton.addEventListener("click", PageGrand);
}

function PageGrand(){
    var divsToHide = document.getElementsByClassName("hide"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "visible"; // or
        divsToHide[i].style.display = "inline-block"; // depending on what you're doing
    }
    moinButton.innerHTML = "-";
    moinButton.removeEventListener("click", PageGrand);
    moinButton.addEventListener("click", PageMoin);
}

function onMapClick(e) {
    confirmerButton = $('#confirmer');
    var marker = L.marker([e.latlng.lat, e.latlng.lng]);
    markers.push(marker);
    marker.addTo(map);
    latlngfind = e.latlng;
    if(markers.length > 1){
        map.removeLayer(markers[0]);
        markers.splice(0, 1);
    } 
    confirmerButton.on("click", VilleAtrouver);
}

$(document).ready(function() {
    main();
});