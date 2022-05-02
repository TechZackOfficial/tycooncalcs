function HideCards() {
    // Cards
    let LogsCard = document.getElementById("LogsCard");
    let QRCard = document.getElementById("QRCard");
    let QRCard2 = document.getElementById("QRCard2");
    let TWCard = document.getElementById("TWCard");
    let TreatedWCard = document.getElementById("TreatedWCard");
    let CMCard = document.getElementById("CMCard");
    //let ConCard = document.getElementById("ConCard");


    // Water Routes
    let LSRoute = document.getElementById("LSRouteSection");
    let LCRoute = document.getElementById("LCRouteSection");

    // Water Route Validation
    if (LSRoute.checked) {
        console.log("LS Route Hidden");
        document.getElementById("LSRoute").style.visibility = "hidden";
    } else if (LCRoute.checked) {
        console.log("LC Route Hidden");
        document.getElementById("LCRoute").style.visibility = "hidden";
    } /*else if (LSRoute.checked === LCRoute.checked) {
        console.log("Both are checked Do not remove any.");
        document.getElementById("LSRoute").hidden = false;
        document.getElementById("LCRoute").hidden = false;

    } */else {
        document.getElementById("LSRoute").style.visibility = "none";
        document.getElementById("LCRoute").style.visibility = "none";
    }




}