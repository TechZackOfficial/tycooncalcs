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

        const materialCalc = [ // calc for value : item name : weight : HTML Textbox ID
            // Logs
            [concreteWanted, "Logs", 50, "LogsRequired"],
            [concreteWanted * 10, "Sawdust", 50, "SawdustCalc"],
            // Toxic Waste Calcs
            [Math.ceil(concreteWanted / 4), "Toxic Waste", 50, "TWRequired"],
            [Math.ceil(concreteWanted / 4) * 4, "Acid", 50, "TWAcid"],
            [Math.ceil(concreteWanted / 4) * 2, "Scrap Lead Mix", 50, "TWSLM"],
            [Math.ceil(concreteWanted / 4) * 2, "Scrap Mercury", 50, "TWSM"],
            // Treated Water LS Route
            [concreteWanted, "Untreated Water", 50, "TreatedWUnfil"],
            [concreteWanted, "Treated Water", 50, "TreatWRequired"],
            [concreteWanted, "Acid", 50, "TreatedWAcid"],
            // Treated Water LC Route
            [concreteWanted, "Treated Water", 50, "LCTWRequired"],
            [concreteWanted, "Auto Parts", 100, "LCTWCar"],
            [concreteWanted, "Military Goods", 100, "LCTWMG"],
            [concreteWanted, "Export Goods", 100, "LCTWEG"],
            [concreteWanted, "Liberty City Token", 0, "LCTWToken"],
            // Quarry Rubble Calcs
            [Math.ceil(ceil10(((concreteWanted * 25) / 0.6), 1) / 12), "Quarry Rubble", 150, "QRRequired"],
            [Math.ceil(ceil10(((concreteWanted * 25) / 0.6), 1) / 12) * 4, "Ore Mix", 150, "QROM"],
            [Math.ceil(ceil10(((concreteWanted * 25) / 0.6), 1) / 12) * 12, "Gravel", 50, "QRGravel"],
            [Math.ceil(ceil10(((concreteWanted * 25) / 0.6), 1) / 12), "Emerald", 150, "QREmerald"],
            // Gravel to Sand Filtration
            [ceil10(((concreteWanted * 25) / 0.6), 1), "Gravel", 50, "GRRequired"],
            [ceil10(((concreteWanted * 25) / 0.6), 1) / 10 * 6, "Sand", 50, "GRSand"],
            [ceil10(((concreteWanted * 25) / 0.6), 1) / 10 * 4, "Flint", 50, "GRFlint"],
            // Cement Mix
            [concreteWanted * 5, "Cement Mix", 50, "CMRequired"],
            [concreteWanted * 25, "Sand", 50, "CMSand"],
            [concreteWanted * 10, "Sawdust - Cement Mix", 50, "CMSawdust"],
            // Concrete Calcs
            [concreteWanted, "Concrete", 50, "ConRequired"],
            [concreteWanted, "Treated Water", 50, "ConTW"], // Change ID to ConTW
            [concreteWanted * 5, "Cement Mix", 50, "ConMix"],
        ]


     for (var i = 0; i < materialCalc.length; i++) {
        var calcPageIDs = document.getElementById(materialCalc[i][3]).id;
        if (calcPageIDs) {
            if (calcPageIDs.includes("Trips")) {
                document.getElementById(materialCalc[i][3]).value = Math.ceil(materialCalc[i][2] * materialCalc[i][0] / trailerCapacity); // need weights for calc in array see placeholders
            } else {
                document.getElementById(materialCalc[i][3]).value = materialCalc[i][0];
            }
        } else {
            console.log("ID not found!")
        }
    }
}
