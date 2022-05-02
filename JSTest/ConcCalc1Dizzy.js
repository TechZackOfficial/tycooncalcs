   function ConcreteCalc1() {


        var trailerCapacity = document.getElementById("TrailerSelect").value;
        var concreteWanted = document.getElementById("AmountRequired").value;
        var MK15 = document.getElementById("MK15").value;
        var premium = document.getElementById("Premium");
        var PostOP = document.getElementById("PostOP");


        if (premium.checked == true) {
            trailerCapacity = trailerCapacity * 1.15;
        } else if (premium.checked || PostOP.checked) {
            trailerCapacity = trailerCapacity * 1.3;
       }

        // Debug for Checks
        console.log(trailerCapacity)


        const materialCalc = [ // calc for value : item name : weight : HTML Textbox ID
            [concreteWanted * 5, "Cement Mix", 50, "CMRequired"],
            [concreteWanted * 25, "Sand", 50, "CMSand"],
            [concreteWanted * 10, "Sawdust", 50, "SawdustCalc"],
            [concreteWanted, "Treated Water", 50, "TreatedWTextBox"],
            [concreteWanted, "Untreated Water", 50, "UTWTextBox"],
            [concreteWanted, "Acid", 50, "TWAcid"],
            [Math.ceil(concreteWanted * 3.98), "Toxic Waste", 50, "TWTextBox"],
            [concreteWanted, "Logs", 50, "LogsRequired"],
            [Math.ceil(concreteWanted * 3.5), "Quarry Rubble", 150, "QRRequired"],
            [Math.ceil(concreteWanted * 41.6), "Gravel", 50, "QRGravel"]
        ]


        for (var i = 0; i < materialCalc.length; i++) {
            var runsRequired = Math.ceil(materialCalc[i][2] * materialCalc[i][0] / trailerCapacity);
            var calcPageIDs = document.getElementById(materialCalc[i][3]);
            if(calcPageIDs) {
                document.getElementById(materialCalc[i][3]).value = materialCalc[i][0];
            } else {
                console.log("ID not found!")
            }

            //debug block:
            console.log("You'll need " + materialCalc[i][0] + " " + materialCalc[i][1] + " Which will take " +
                runsRequired + " trips!</br>");
        }
    }
