let a = document.getElementById('content');
let out = document.getElementsByClassName('out');
col = document.getElementsByClassName('color')

function calcBMI() {
    
    let height = document.getElementById('Height').value;
    let weight = document.getElementById('Weight').value;

   
    if (height && weight) {
       
        height = parseFloat(height) / 100; 
        height = height ** 2; 

       
        weight = parseFloat(weight);

        // Calculate BMI
        let bmi = weight / height;

        
        if (bmi < 18.5) {
            a.textContent = "Underweight"; 
            out[0].style.visibility = 'visible'; 
            col[0].style.backgroundColor = "Yellow"
            
        }


        if (bmi=>18.5 && bmi<=24.9) {
            a.textContent = "Normal"; 
            out[0].style.visibility = 'visible'; 
            col[0].style.backgroundColor = "green"
            
        }

        if (bmi=>25.9 && bmi<=29.9) {
            a.textContent = "OverWeight"; 
            out[0].style.visibility = 'visible'; 
            col[0].style.backgroundColor = "red"
            
        }
    }
}
