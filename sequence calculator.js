function calculateSequence() {
    var sequenceType = document.getElementById("sequenceType").value;
    var inputNumber = parseInt(document.getElementById("inputNumber").value);

    var sequence = [];
    var explanation = "Sequence: ";

    if (inputNumber < 1 || isNaN(inputNumber)) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    for (var i = 0; i < inputNumber; i++) {
        var nextValue = 0;
        var formula = "";

        if (i === 0) {
            nextValue = 0;
        } else if (i === 1) {
            nextValue = 1;
        } else if (i === 2) {
            nextValue = 1;
        } else {
            switch (sequenceType) {
                case "fibonacci":
                    nextValue = sequence[i - 1] + sequence[i - 2];
                    formula = "F(n) = F(n-1) + F(n-2)";
                    break;
                case "tribonacci":
                    nextValue = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
                    formula = "T(n) = T(n-1) + T(n-2) + T(n-3)";
                    break;
                case "lucas":
                    nextValue = sequence[i - 1] + sequence[i - 2];
                    formula = "L(n) = L(n-1) + L(n-2)";
                    break;
            }
        }

        sequence.push(nextValue);
        if (i >= 3) {
            explanation += `<br>${formula} → ${nextValue}`;
        } else {
            explanation += `<br>Initial value: ${nextValue}`;
        }
    }

    explanation += "<br>Computed Sequence: " + sequence.join(", ");
    explanation += "<br>Last value: " + sequence[inputNumber - 1];

    document.getElementById("output").innerHTML = explanation;
}
