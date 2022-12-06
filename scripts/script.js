var confirmerButton;
var map;
var latlngfind;
var cityfind;
var moinButton;
var pleinecran;
var tour;
var score;
var distances;
var markers = new Array();

function main(){
    streetviewgenerator();
    map = L.map('map').setView([51.505, -0.09], 7);
    moinButton = document.getElementById("minus");
    pleinecran = document.getElementById("pleinecran");
    pleinecran.addEventListener("click", PleinEcran);
    moinButton.addEventListener("click", PageMoin);
    score = 0;
    tour = 1;
    mapleeflet();
}

function PleinEcran(){


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

function mapleeflet(){
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    map.addEventListener("click", onMapClick);
}

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
    confirmerButton.addEventListener("click", ville);
}

function ville(){
    map.removeEventListener("click", onMapClick);
    /*var url = "https://us1.locationiq.com/v1/reverse"
    var datas = {
        key : "pk.938afe8c6000b6dd94d2262604cb7ebb",
        lat : latlngfind.lat,
        lon : latlngfind.lng,
        format : "json"
    };
    $.ajax({
        url: url,
        data : datas,
        method:"GET",
        dataType:"JSON",
        success: function(retour){
            cityfind = retour.address.town;
         },
         error : function() {
             alert("PB avec l'URL");
         }	
    });*/
    VilleAtrouver();
}

function VilleAtrouver(){
    confirmerButton.removeEventListener("click", ville);
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
             alert("PB avec l'URL");
         }	
    });
}

function DistanceVille(from, to)
{
    var distanceKm=from.distanceTo(to).toFixed(0)/1000;
    document.getElementById("distance").innerText = "Distance : " + distanceKm + " km";
    resultat = 100000 - (distanceKm*10);
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
    confirmerButton.removeEventListener("click", ProchainTour);
    mapleeflet();
}

function streetviewgenerator() {
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



