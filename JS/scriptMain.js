var displayFullInfo, rollEvent;

rollEvent = function (){
    var fullInfo = document.getElementById("full-info-panel");
    if(fullInfo.style.display === "none" || fullInfo.style.display === ""){
        fullInfo.style.display = "block";
        this.children[0].innerHTML = "Свернуть"
    } else {
        fullInfo.style.display = "none";
        this.children[0].innerHTML = "Показать все"
        /*window.location.hash="full-info-button";
        window.location.hash="";*/
    }
};

displayFullInfo = function () {
    var button = document.getElementById("full-info-button");
    button.addEventListener("click", rollEvent)
}();