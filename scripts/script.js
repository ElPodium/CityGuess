const elements = [];

var video;
var startGameButton;
var signInButton;

function main(){
    video = document.getElementById('video');
    elements.push(video);
    video.playbackRate = 0.9;

    startGameButton = document.getElementById('startGame');
    elements.push(startGameButton);
    startGameButton.addEventListener("click", startGame);

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

