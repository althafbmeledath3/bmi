let a = document.getElementById('content');
let out = document.getElementsByClassName('out');
let col = document.getElementsByClassName('color');

function calcBMI() {
    let height = document.getElementById('Height').value;
    let weight = document.getElementById('Weight').value;

    if (height && weight) {
        height = parseFloat(height) / 100; // Convert cm to meters
        height = height * height; // or height = Math.pow(height, 2);
        
        weight = parseFloat(weight);

        let bmi = weight / height;

        // Display results
        if (bmi < 18.5) {
            a.textContent = "Underweight";
            out[0].style.visibility = 'visible';
            col[0].style.backgroundColor = "yellow";
        }

        if (bmi >= 18.5 && bmi <= 24.9) {
            a.textContent = "Normal";
            out[0].style.visibility = 'visible';
            col[0].style.backgroundColor = "green";
        }

        if (bmi >= 25 && bmi <= 29.9) {
            a.textContent = "Overweight";
            out[0].style.visibility = 'visible';
            col[0].style.backgroundColor = "red";
        }

        if (bmi >= 30) {
            a.textContent = "Obesity";
            out[0].style.visibility = 'visible';
            col[0].style.backgroundColor = "darkred";
        }
    } else {
        a.textContent = "Please fill out both fields!";
        out[0].style.visibility = 'visible';
        col[0].style.backgroundColor = "grey";
    }
}
