var gameMarker="X";
function changeMarkerToX(){
    console.log("The x Button was clicked!")
    gameMarker="X";
} 
function changerMarkerToO(){
    console.log("The o Button was clicked!")
    gameMarker="O";
}
function placeMark(id){
    var cell= document.getElementById(id);
    console.log("id",id)
    cell.innerHTML= gameMarker;
}