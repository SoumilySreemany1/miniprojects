function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const bmiValue = document.getElementById("bmi-value");
  const bmiMessage = document.getElementById("bmi-message");
  const bmiBox = document.getElementById("bmi-box");

  if (!height || !weight || height <= 0 || weight <= 0) {
    bmiValue.textContent = "Invalid input!";
    bmiMessage.textContent = "Please enter valid height and weight.";
    bmiBox.style.display = "block";
    bmiBox.style.borderLeftColor = "red";
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  bmiValue.textContent = `BMI: ${bmi.toFixed(2)}`;

  if (bmi < 18.6) {
    bmiMessage.textContent = "You are Underweight.";
    bmiBox.style.borderLeftColor = "#FFA500";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    bmiMessage.textContent = "You are in Normal Range.";
    bmiBox.style.borderLeftColor = "green";
  } else {
    bmiMessage.textContent = "You are Overweight.";
    bmiBox.style.borderLeftColor = "red";
  }

  bmiBox.style.display = "block";
}
