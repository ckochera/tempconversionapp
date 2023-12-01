const tempInput = document.getElementById('tempInput');
const tempScaleList = document.getElementById('temperatures');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');


function convertTemp(){
    let temperature = tempInput.value;
    let convertedTemp = (temperature * (9/5)) + 32;

    const p = document.createElement('p');
    p.textContent = temperature + " degrees Celcius is " + convertedTemp + " degrees Farenheit."
    result.appendChild(p);
}


convertBtn.addEventListener('click', convertTemp);
