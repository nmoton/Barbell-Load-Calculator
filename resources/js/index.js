// JavaScript source code
function calculatePlates() {

    document.getElementById("Results").innerHTML = ""; //Clears original list

    var TargetedWeight = document.getElementById("inputTraining").value;
    var WeightOfBar = document.getElementById("inputBar").value;

    var WeightForCalculations = Original = (TargetedWeight - WeightOfBar) / 2;

    if (TargetedWeight <= 0 || WeightOfBar <= 0 || WeightForCalculations <= 0) {
        var node = document.createElement("li");
        node.className = "list-group-item list-group-item-danger";
        var textnode = document.createTextNode("Invalid Value(s) - Cannot Calculate");
        node.appendChild(textnode);
        document.getElementById("Results").appendChild(node);
    }

    else {
        document.getElementById("Load").innerHTML = "Load the following plates on <b>both sides</b> of your " + WeightOfBar + "lb bar:";

        if ((WeightForCalculations % 5) > 0) {
            var node = document.createElement("li");
            node.className = "list-group-item list-group-item-warning";
            var textnode = document.createTextNode("Training Weight or Bar Weight is NOT an integer multiple of 5! Calculation is ONLY AN ESTIMATE!")
            node.appendChild(textnode);
            document.getElementById("Results").appendChild(node);
        }

        if (parseInt(WeightForCalculations / 45) != 0) {
            var NumberOf45Plates = parseInt(WeightForCalculations / 45);
            WeightForCalculations -= NumberOf45Plates * 45;

            var node = document.createElement("li");
            node.className = "list-group-item list-group-item-success";
            var Plates45 = NumberOf45Plates + " x 45lb Plate(s)";
            var textnode = document.createTextNode(Plates45);
            node.appendChild(textnode);
            document.getElementById("Results").appendChild(node);
        }

        if (parseInt(WeightForCalculations / 35) != 0) {
            var NumberOf35Plates = parseInt(WeightForCalculations / 35);
            WeightForCalculations -= NumberOf35Plates * 35;

            var node = document.createElement("li");
            node.className = "list-group-item list-group-item-success";
            var Plates45 = NumberOf35Plates + " x 35lb Plate(s)";
            var textnode = document.createTextNode(Plates45);
            node.appendChild(textnode);
            document.getElementById("Results").appendChild(node);
        }

        if (parseInt(WeightForCalculations / 25) != 0) {
            var NumberOf25Plates = parseInt(WeightForCalculations / 25);
            WeightForCalculations -= NumberOf25Plates * 25;

            var node = document.createElement("li");
            node.className = "list-group-item list-group-item-success";
            var Plates45 = NumberOf25Plates + " x 25lb Plate(s)";
            var textnode = document.createTextNode(Plates45);
            node.appendChild(textnode);
            document.getElementById("Results").appendChild(node);
        }

        if (parseInt(WeightForCalculations / 10) != 0) {
            var NumberOf10Plates = parseInt(WeightForCalculations / 10);
            WeightForCalculations -= NumberOf10Plates * 10;

            var node = document.createElement("li");
            node.className = "list-group-item list-group-item-success";
            var Plates45 = NumberOf10Plates + " x 10lb Plate(s)";
            var textnode = document.createTextNode(Plates45);
            node.appendChild(textnode);
            document.getElementById("Results").appendChild(node);
        }

        if (parseInt(WeightForCalculations / 5) != 0) {
            var NumberOf5Plates = parseInt(WeightForCalculations / 5);
            WeightForCalculations -= NumberOf5Plates * 5;

            var node = document.createElement("li");
            node.className = "list-group-item list-group-item-success";
            var Plates45 = NumberOf5Plates + " x 5lb Plate(s)";
            var textnode = document.createTextNode(Plates45);
            node.appendChild(textnode);
            document.getElementById("Results").appendChild(node);
        }

        if (parseInt(WeightForCalculations / 2.5) != 0) {
            var NumberOfHalf5Plates = parseInt(WeightForCalculations / 2.5);
            WeightForCalculations -= NumberOfHalf5Plates * 2.5;

            var node = document.createElement("li");
            node.className = "list-group-item list-group-item-success";
            var Plates45 = NumberOfHalf5Plates + " x 2.5lb Plate(s)";
            var textnode = document.createTextNode(Plates45);
            node.appendChild(textnode);
            document.getElementById("Results").appendChild(node);
        }

    }

}