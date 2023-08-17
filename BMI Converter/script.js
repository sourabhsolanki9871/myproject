const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const conditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue / (heightValue * heightValue);

    bmiInputEl.value = bmiValue;

    if (bmiValue < 18.5) {
        conditionEl.textContent = "Under Weight";
    }
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        conditionEl.textContent = "Normal Weight";
    }

    else if (bmiVlaue > 25 && bmiVlaue <= 29.99) {
        conditionEl.textContent = "Over Weight";
    }

    else if (bmiValue >= 30) {
        conditionEl.textContent = " Obesity";
    }



}

btnEl.addEventListener("click", calculateBMI);

