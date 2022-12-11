var confirmerButton;
var map;
var latlngfind;
var cityfind;
var moinButton;
var pleinecran;
var easyButton;
var tour;
var score;
var distances;
var markers = new Array();

function main(){
    streetviewgenerator();
    map = L.map('map').setView([51.505, -0.09], 7);
    moinButton = document.getElementById("minus");
    //pleinecran = document.getElementById("pleinecran");
    //pleinecran.addEventListener("click", PleinEcran);
    moinButton.addEventListener("click", PageMoin);
    score = 0;
    tour = 1;
    mapleeflet();
}

/*function PleinEcran(){
document.getElementById("Leaflets").innerHTML =  `<div id = "Leaflets" class="flex items-start justify-end">
<div id = "BlockLeaf" class="hide absolute border-2 border-#BBCBC4-400 bg-white bg-opacity-75 z-2 px-4 py-2 w-screen h-screen rounded">
    <p id = "tour"class="text-center text-xl py-2 px-1">Tour n°`+tour+`</p>
    <p id="Scorer" class="text-start text-xl py-2 px-1">Score : `+score+`</p>
    <p id="distance" class="distance text-start text-xl py-1 px-1">Distance : 0</p>
<div class="flex justify-end py-2">
    <button type="button" id="pleinecran" class="cursor-pointer rounded-lg border-2 border-white px-4 py-2.5 leading-tight rounded hover:bg-black hover:bg-opacity-10 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out"><img class="w-4" src="./assets/P-ecran.jpg"></button>
</div>
<div id="map" class="h-2/3 w-auto">

</div>
<div class="flex justify-center py-2">
    <button type="button" id="confirmer" class="cursor-pointer rounded-lg border-2 border-white  px-8 py-2.5 text-black font-medium text-lg leading-tight uppercase rounded hover:bg-black hover:bg-opacity-10 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">Confirmer</button>
</div>
</div>
</div>`
map = L.map('map').setView([51.505, -0.09], 7);
document.getElementById("pleinecran").removeEventListener("click", PleinEcran);
document.getElementById("pleinecran").addEventListener("click", miniEcran);
if(markers.length == 0){
    mapleeflet();
}
else{
    mapRecover();
}
}

function miniEcran(){
document.getElementById("Leaflets").innerHTML = `<div id = "Leaflets" class="flex items-start justify-end">
<button type="button" id="minus" class="absolute cursor-pointer rounded-full border-2 border-white px-3 py-1 text-black font-medium text-lg leading-tight uppercase rounded hover:bg-black hover:bg-opacity-10 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">-</button>
<div id = "BlockLeaf"class="hide absolute border-2 border-#BBCBC4-400 bg-white bg-opacity-75 mt-8 z-2 px-4 py-2 w-96 mr-4 rounded">
    <p id = "tour"class="text-center text-m py-2 px-1">Tour n°`+tour+`</p>
    <p id="Scorer" class="text-start text-m py-2 px-1">Score : `+score+`</p>
    <p id="distance" class="distance text-start text-m py-1 px-1">Distance : 0</p>
<div class="flex justify-end py-2">
    <button type="button" id="pleinecran" class="cursor-pointer rounded-lg border-2 border-white px-4 py-2.5 text-black font-medium text-lg leading-tight uppercase rounded hover:bg-black hover:bg-opacity-10 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out"><img class="w-4" src="./assets/P-ecran.jpg"></button>
</div>
<div id="map" class="h-80 w-80">

</div>
<div class="flex justify-center py-2">
    <button type="button" id="confirmer" class="cursor-pointer rounded-lg border-2 border-white  px-8 py-2.5 text-black font-medium text-lg leading-tight uppercase rounded hover:bg-black hover:bg-opacity-10 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">Confirmer</button>
</div>
</div>
</div>`
map = L.map('map').setView([51.505, -0.09], 7);
document.getElementById("pleinecran").removeEventListener("click", miniEcran);
document.getElementById("pleinecran").addEventListener("click", PleinEcran);
if(markers.length == 0){
    mapleeflet();
}
else{
    mapRecover();
}
}*/

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

function mapleeflet(){
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    noWrap: true, 
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    map.addEventListener("click", onMapClick);
}

/*function mapRecover(){
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    noWrap: true, 
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([markers[0]._latlng.lat, markers[0]._latlng.lng]).addTo(map);
    if(markers.length > 1) {
        L.marker([markers[1]._latlng.lat, markers[1]._latlng.lng]).addTo(map);
        var latlngs = [
            [markers[0]._latlng.lat, markers[0]._latlng.lng],
            [markers[1]._latlng.lat, markers[1]._latlng.lng]
        ];
        L.polyline(latlngs, {color: 'red'}).addTo(map);
        confirmerButton = document.getElementById('confirmer');
        confirmerButton.innerText = "Prochain";
        confirmerButton.addEventListener("click", ProchainTour);
    }
    else{
        map.addEventListener("click", onMapClick);
    }
    
}*/

function onMapClick(e) {
    confirmerButton = document.getElementById('confirmer');
    var marker = L.marker([e.latlng.lat, e.latlng.lng]);
    markers.push(marker);
    marker.addTo(map);
    latlngfind = e.latlng;
    if(markers.length > 1){
        map.removeLayer(markers[0]);
        markers.splice(0, 1);
    } 
    confirmerButton.addEventListener("click", VilleAtrouver);
}

function VilleAtrouver(){
    map.removeEventListener("click", onMapClick);
    var url2 = "https://us1.locationiq.com/v1/search"
    var datas = {
        key : "pk.938afe8c6000b6dd94d2262604cb7ebb",
        q : cityfind,
        format : "json",
    };
    $.ajax({
        url: url2,
        data: datas,
        method:"GET",
        dataType:"JSON",
        success: function(retour){
            var marker = L.marker([retour[0].lat, retour[0].lon]);
            marker.addTo(map);
            var latlngs = [
                [retour[0].lat, retour[0].lon],
                [latlngfind.lat, latlngfind.lng]
            ];
            var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
            markers.push(marker);
            markers.push(polyline);
            var markerArrivé = marker.getLatLng();
            DistanceVille(latlngfind, markerArrivé);
         },
         error : function() {
             alert("erreur sur le nom de la ville, vous ne perdrez aucun point, une nouvelle ville va se générer");
             confirmerButton.removeEventListener("click", VilleAtrouver);
             Suivant();
         }	
    });
}

function DistanceVille(from, to)
{
    confirmer.removeEventListener("click", VilleAtrouver);
    var distanceKm=from.distanceTo(to).toFixed(0)/1000;
    document.getElementById("distance").innerText = "Distance : " + distanceKm + " km";
    resultat = 1000 - distanceKm;
    if(resultat < 0){
        resultat = 0;
    }
    score += Math.round(resultat);
    document.getElementById("Scorer").innerText = "Score : " + score;
    confirmerButton.innerText = "Prochain"
    confirmerButton.addEventListener("click", ProchainTour);
}

function ProchainTour(){
    tour += 1;
    document.getElementById("tour").innerText = "Tour n°" + tour;
    document.getElementById("distance").innerText = "Distance : 0 km";
    console.log(markers.length);
    for(var i = 0; i < markers.length; i++){
        map.removeLayer(markers[i]);
        markers.splice(i, 1);
    }
    map.removeLayer(markers[0]);
    markers.splice(0, 1);
    confirmerButton.innerText = "Confirmer";
    Suivant();
}

function Suivant(){
    if(markers.length > 0){
        map.removeLayer(markers[0]);
    }
    confirmerButton.removeEventListener("click", ProchainTour);
    streetviewgenerator();
    mapleeflet();
}

function streetviewgenerator() {
    $('iframe').remove();
    var api = "https://random-ize.com/random-map/map-f.php";
    $.ajax({ 
        type: 'GET', 
        url: api,
        crossDomain: true, 
        dataType: "html", 
        cache: false,
        success: function(data) {
            cityfind = $(data).find('iframe').prevObject[0].textContent;
            var generatedIframe = $(data).find('iframe').prevObject[1].attributes.src.nodeValue;
            $("#googlemapados").append(`
            <iframe allowtransparency="true" id="googlemap" class="h-screen w-screen"
            src="${generatedIframe}"
            frameborder="0">
            </iframe>`);

            console.log(cityfind);
        }, 
        error: function() { 
          console.log(arguments); 
        } 
      });
}
main();
