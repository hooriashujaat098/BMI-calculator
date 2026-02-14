const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");


function calculateBMI(){
    const heightVal = document.getElementById("height").value / 100;
    const weightVal = document.getElementById("weight").value;
    
    const bmiVal = weightVal / (heightVal * heightVal);

    bmiInputEl.value = bmiVal;

    if(bmiVal < 18.5){
        weightConditionEl.innerText = "Under Weight!";
    } else if(bmiVal >= 18.5 && bmiVal <= 24.9){
        weightConditionEl.innerText = "Normal weight";
    } else if(bmiVal >= 25 && bmiVal <= 29.9){
        weightConditionEl.innerText = "Overweight";
    } else if(bmiVal >= 30){
        weightConditionEl.innerText = "Obesity";
    }
}



btnEl.addEventListener("click", calculateBMI);