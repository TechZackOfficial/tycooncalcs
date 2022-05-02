/*var trailerCapacity = 10000;
var concreteWanted = document.getElementById("concreteVal").value;

const materialCalc = [ // calc for value : item name : weight : HTML Textbox ID
    [concreteWanted * 5, "Cement Mix", 50, "CementTextBox"],
    [concreteWanted * 25, "Sand", 50, "SandTextBox"],
    [concreteWanted * 10, "Sawdust", 50, "SawdustTextBox"],
    [concreteWanted, "Treated Water", 50, "TreatedWTextBox"],
    [concreteWanted, "Untreated Water", 50, "UTWTextBox"],
    [concreteWanted, "Acid", 50, "AcidTextBox"],
    [Math.round(concreteWanted * 3.98), "Toxic Waste", 50, "TWTextBox"],
    [concreteWanted, "Logs", 50, "LogTextBox"],
    [Math.round(concreteWanted * 3.5), "Quarry Rubble", 150, "QRTextBox"],
    [Math.round(concreteWanted * 41.6), "Gravel", 50, "GravelTextBox"]
]



for (var i = 0; i < materialCalc.length; i++) {
    var runsRequired = Math.round(materialCalc[i][2] * materialCalc[i][0] / trailerCapacity);
    
    if (runsRequired < 1){ // Larger trailers and low amts of concrete get rounded down to 0 runs required when it is always at least 1
        runsRequired = 1;
    }
    document.getElementById(materialCalc[i][3]).value = materialCalc[i][0] + " " + materialCalc[i][1] +
        " (" + runsRequired + " Trips required with " + trailerCapacity + "KG of storage!)";

    //debug block:
    console.log("You'll need " + materialCalc[i][0] + " " + materialCalc[i][1] + " Which will take " +
        runsRequired + " trips!</br>");*/

// Concrete Caluclator Designed by TechZack :) | Help with DizzyHurricane

function ConcreteCalc() {
    // Inputs
    var amountRequired = document.getElementById("AmountRequired").value;
    var trailer = document.getElementById("TrailerSelect").value;
    // Logs
    var SawdustReq = amountRequired * 10
    var LogsReq = SawdustReq / 10
    var LogsTrip = Math.ceil(LogsReq * 60 / trailer);

    if (LogsTrip < 1) {
        LogsTrip = 1;
    }

    console.log(`Sawdust Required ${SawdustReq}`);
    console.log(`Logs Required ${LogsReq}`);
    console.log(`Trips ${LogsTrip}`);

    //console.log(amountRequired + trailer);
}