
const elements = [];

var video;
var startGameButton;
var signInButton;
var confirmerButton;
var map;
var cercle;
var latlngfind;
var cityfind;

function main(){
    var divsToHide = document.getElementsByClassName("cacher");
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; // depending on what you're doing
        divsToHide[i].style.visibility = "hidden"; // or
    }
    video = document.getElementById('video');
    elements.push(video);
    //video.playbackRate = 0.9;
    map = L.map('map').setView([51.505, -0.09], 7);
    //cercle = L.circle();

    startGameButton = document.getElementById('startGame');
    elements.push(startGameButton);
    startGameButton.addEventListener("click", startGame);

}


function startGame(){
    generateCoordinates();
    loadGamePage();
}

function generateCoordinates(){

 /*var urle = "https://geocode.xyz/london";
    var donné = {
        "json":1,
    };
   var url= "https://wft-geo-db.p.rapidapi.com/v1/geo/citi";
    params= {minPopulation: '10000'}
    $.ajax({
        url : urle, 
        data : donné,
        method : "GET",
        dataType : "JSON",
        success: function(retour){
           console.log(retour.longt + " " + retour.latt);
        },
        error : function() {
            alert("PB avec l'URL");
        }	
    });*/
 
}    

function loadGamePage(){
    hideElements();
}

function hideElements(){
    var divsToHide = document.getElementsByClassName("hide"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    var divsToHides = document.getElementsByClassName("cacher");
    for(var i = 0; i < divsToHides.length; i++){
        divsToHides[i].style.display = "block"; // depending on what you're doing
        divsToHides[i].style.visibility = "visible"; // or
    }
    // alert(elements);
    // for (let x in elements){
    //     elements[x].hidden = true;
    // }
    mapleeflet();
    //streetviewgenerator();
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
    marker.addTo(map);
    /*cercle = L.circleMarker(e.latlng, {
        radius: 20,
        stroke: false,
        fillColor: 'red',
        fillOpacity: 0.5
      }).addTo(map);*/
      latlngfind = e.latlng;
    confirmerButton.addEventListener("click", ville);
    
}

function ville(){
    map.removeEventListener("click", onMapClick);
    var url = "https://us1.locationiq.com/v1/reverse?key=pk.938afe8c6000b6dd94d2262604cb7ebb&lat="+latlngfind.lat+"&lon="+latlngfind.lng+"&format=json"
    /*var data = {
        key : "pk.938afe8c6000b6dd94d2262604cb7ebb",
        lat : latlngfind.lat,
        lon : latlngfind.lng,
        format : "json"
    };*/
    $.ajax({
        url: url,
        method:"GET",
        dataType:"JSON",
        success: function(retour){
            cityfind = retour.address.town;
         },
         error : function() {
             alert("PB avec l'URL");
         }	
    });
    var url2 = "https://us1.locationiq.com/v1/search?key=pk.938afe8c6000b6dd94d2262604cb7ebb&q=221b%2C%20Baker%20St%2C%20London%20&format=json"
    $.ajax({
        url: url2,
        method:"GET",
        dataType:"JSON",
        success: function(retour){
            var markers = L.marker([retour[0].lat, retour[0].lon]);
            markers.addTo(map);
            var latlngs = [
                [retour[0].lat, retour[0].lon],
                [latlngfind.lat, latlngfind.lng]
            ];
            
            var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
         },
         error : function() {
             alert("PB avec l'URL");
         }	
    });
}

function streetviewgenerator(){
    $.ajax({
        url : "https://random-ize.com/random-map/map-f.php", 
        method : "GET",
        dataType : "JSON",
        success: function(retour){
           document.getElementById('map').innerHTML(retour);
        },
        error : function() {
            alert("PB avec l'URL");
        }	
    });
}



