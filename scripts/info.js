var confirmerButton;
var map;
var latlngfind;
var cityfind;
var moinButton;
var easyButton;
var distances;
var markers = new Array();
var infos = null;

function main(){
    $("#VilleInformation").css('visibility','hidden');
    map = L.map('map').setView([51.505, -0.09], 7);
    moinButton = document.getElementById("minus");
    moinButton.addEventListener("click", PageMoin);
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
    confirmerButton.on("click", submitChoice);
}

function updateIframe(iframe) {

    $("#googlemapados").append(`
            <iframe allowtransparency="true" id="googlemap" class="h-screen w-screen"
            src="${iframe}"
            frameborder="0">
            </iframe>`);
}

function updateInfos(json) {
    infos = JSON.parse(json);
    console.log(infos);
}

function showInfos() {
    if ($("#VilleInformation").css('visibility') == 'hidden') {
        $("#VilleInformation").css('visibility', 'visible');
    } else {
        $("#VilleInformation").css('visibility', 'hidden');
    }
    $("#InfoVille").html('<p class="text-xl text-center py-2">Détails a propos du pays</p>'+'<p class="py-2">Capitale : '+ infos.capitale +'</p>'+'<p class="py-2">latitude : '+ infos.latitude +'</p>'+'<p class="py-2">longitude : '+ infos.longitude +'</p>'+'<p class="py-2">Devises : '+ infos.devise +'</p>'+'<p class="py-2">Population : '+ infos.population + ' habitants</p>'+'<p class="py-2">Touristes : '+ infos.touristes + '</p>'+'<p class="py-2">Emission de CO2 : '+ infos.emissions  + ' tonnes par an</p>'+`<p class="py-2">Utilisateur d'internet : ` + infos.usersinternet + "%</p>");
}

function submitChoice() {
    var marker = L.marker([infos.latitude, infos.longitude]);
    marker.addTo(map);
    markers.push(marker);

    DistanceVille(markers[0].getLatLng(), markers[1].getLatLng());
}

function DistanceVille(from, to)
{
    $("#confirmer").text('Prochain');
    $("#confirmer").on('click', function() {
        console.log("Prochaine partie");
        window.location.href=window.location;
    });


    console.log(from, to, markers);
    //confirmer.removeEventListener("click", VilleAtrouver);
    var distanceKm=from.distanceTo(to).toFixed(0)/1000;
    document.getElementById("distance").innerText = "Distance : " + distanceKm + " km";

    var latlngs = [
        [from.lat, from.lng],
        [to.lat, to.lng]
    ];

    var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
}


$(document).ready(function() {
    main();

    $('#showinfos').on('click', showInfos);
});