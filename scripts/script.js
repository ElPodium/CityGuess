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
    /*
    video = document.getElementById('video');
    elements.push(video);*/
    //video.playbackRate = 0.9;
    map = L.map('map').setView([51.505, -0.09], 7);
    //cercle = L.circle();

    /*startGameButton = document.getElementById('startGame');
    elements.push(startGameButton);
    startGameButton.addEventListener("click", startGame);*/
    startGame();

}

function startGame(){
    generateCoordinates();
    loadGamePage();
}

function generateCoordinates(){
}    

function loadGamePage(){
    hideElements();
}

function hideElements(){
    mapleeflet();
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
        header: {
            'Access-Control-Allow-Origin': '*',
        },
        beforeSend: function(xhr){
            xhr.setRequestHeader ("Authorization", "Basic" + btoa(""));
        },
        success: function(retour){
           console.log(retour);
        },
        error : function() {
            alert("PB avec l'URL");
        }	
    });
}




