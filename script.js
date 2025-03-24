let a = document.getElementById('content');
let out = document.getElementsByClassName('out');
let col = document.getElementsByClassName('color');

function calcBMI() {
    let height = document.getElementById('Height').value;
    let weight = document.getElementById('Weight').value;

    if (height && weight) {
        height = parseFloat(height) / 100;
        height = height * height; // or height = Math.pow(height, 2);

        weight = parseFloat(weight);

        let bmi = weight / height;

        if (bmi < 18.5) {
            a.textContent = "Underweight"; 
            out[0].style.visibility = 'visible'; 
            col[0].style.backgroundColor = "Yellow";
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
    }
}
