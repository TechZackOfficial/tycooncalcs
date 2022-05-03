function decimalAdjust(type, value, exp) {

    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}






function ConcreteCalc() {
    var trailerCapacity = document.getElementById("TrailerSelect").value;
    var concreteWanted = document.getElementById("AmountRequired").value;
    var MK15 = document.getElementById("MK15").value;
    var premium = document.getElementById("Premium");
    var PostOP = document.getElementById("PostOP");
    const ceil10 = (value, exp) => decimalAdjust('ceil', value, exp);
    
    if (concreteWanted > 1000000) {
      console.log("Number too high creates silly output!");
      // document.getElementByID("SomeLabel").value = "Concrete required too high!"
      return;
    }


    if (premium.checked) {
        trailerCapacity = Math.floor(trailerCapacity * 1.15);
    } else if (PostOP.checked) {
        trailerCapacity = Math.floor(trailerCapacity * 1.15);
    } else if (premium.checked || PostOP.checked) {
        trailerCapacity = Math.floor(trailerCapacity * 1.3);
    }

    // Debug for Checks
    console.log(trailerCapacity)


    // BIDMAS

    const materialCalc = [ // calc for value : item name : weight : HTML Textbox ID : Cost Per item
        // Logs
        [concreteWanted, "Logs", 60, "LogsRequired", 0],
        [concreteWanted * 10, "Sawdust", 3, "SawdustCalc", 0],
        // Toxic Waste Calcs
        [Math.ceil(concreteWanted / 4), "Toxic Waste", 110, "TWRequired", 0],
        [Math.ceil(concreteWanted / 4) * 4, "Acid", 5, "TWAcid", 0],
        [Math.ceil(concreteWanted / 4) * 2, "Scrap Lead", 15, "TWSLM", 0],
        [Math.ceil(concreteWanted / 4) * 2, "Scrap Mercury", 15, "TWSM", 0],
        // Treated Water LS Route
        [concreteWanted, "Unfiltered Water", 100, "TreatedWUnfil", 0],
        [concreteWanted, "Treated Water", 100, "TreatWRequired", 0],
        [concreteWanted, "Acid", 5, "TreatedWAcid", 0],
        // Treated Water LC Route
        [concreteWanted, "Treated Water", 100, "LCTWRequired", 0],
        [concreteWanted, "Auto Parts", 100, "LCTWCar", 0],
        [concreteWanted, "Military Goods", 100, "LCTWMG", 0],
        [concreteWanted, "Export Goods", 100, "LCTWEG", 0],
        [concreteWanted, "Liberty City Token", 0, "LCTWToken", 0],
        // Quarry Rubble Calcs
        [Math.ceil(ceil10(((concreteWanted * 25) / 0.6), 1) / 12), "Quarry Rubble", 150, "QRRequired", 0],
        [Math.ceil(ceil10(((concreteWanted * 25) / 0.6), 1) / 12) * 4, "Raw Ore Mix", 15, "QROM", 0],
        [Math.ceil(ceil10(((concreteWanted * 25) / 0.6), 1) / 12) * 12, "Gravel", 5, "QRGravel", 0],
        [Math.ceil(ceil10(((concreteWanted * 25) / 0.6), 1) / 12), "Raw Emeralds", 10, "QREmerald", 0],
        // Gravel to Sand Filtration
        [ceil10(((concreteWanted * 25) / 0.6), 1), "Gravel", 5, "GRRequired", 0],
        [ceil10(((concreteWanted * 25) / 0.6), 1) / 10 * 6, "Sand", 5, "GRSand", 0],
        [ceil10(((concreteWanted * 25) / 0.6), 1) / 10 * 4, "Flint", 5, "GRFlint", 0],
        // Cement Mix
        [concreteWanted * 5, "Cement Mix", 25, "CMRequired", 0],
        [concreteWanted * 25, "Sand", 5, "CMSand", 0],
        [concreteWanted * 10, "Sawdust", 3, "CMSawdust", 0],
        // Concrete Calcs

        [concreteWanted, "Concrete", 160, "ConRequired", 0],
        [concreteWanted, "Treated Water", 100, "ConTW", 0], // Change ID to ConTW
        [concreteWanted * 5, "Cement Mix", 25, "ConMix", 0],
        // Trips placeholders
        [Math.ceil(ceil10(((concreteWanted * 25) / 0.6), 1) / 12), "QRTrips", 150, "QRTrips"],
        [concreteWanted, "TWTrips", 100, "TWTrips", 0],
        [concreteWanted, "TreatedWTripsLosSantos", 100, "TreatedWTrips", 0],
        [concreteWanted, "LogsTrips to Sawmill", 60, "LogsTrips", 0]
    ]


    for (var i = 0; i < materialCalc.length; i++) {
        var calcPageIDs = document.getElementById(materialCalc[i][3]).id;
        if (calcPageIDs) {
            console.log(calcPageIDs);
            if (calcPageIDs.includes("Trips")) {
                document.getElementById(materialCalc[i][3]).value = Math.ceil(materialCalc[i][2] * materialCalc[i][0] / trailerCapacity); 
                document.getElementById(materialCalc[i][3]).value = materialCalc[i][0];
            }
        } else {
            console.log(CalcPageIDS + " ID not found!")
        }
    }
}
