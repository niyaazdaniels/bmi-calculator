// declaring variables

function calculate (){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let calculate = weight/(height/100*height/100);
    let calculate1= (calculate.toFixed(2));

    document.getElementById('result').innerHTML = `Your BMI is ${calculate1}`;

    if(calculate <= 18.5){
        document.getElementById('comment').innerHTML = `Underweight`
    } else if (calculate < 24.9) {
        document.getElementById('comment').innerHTML = `Normal Range`
    } else if ( calculate < 29.9 ) {
        document.getElementById('comment').innerHTML = `Overweight`
    } else {
        document.getElementById('comment').innerHTML = `See Your Dr Immediately`
    }
}

