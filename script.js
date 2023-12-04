const tempInput = document.getElementById('tempInput');
const tempScaleList = document.getElementById('tempScaleList');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');

function convertTemp() {
    let temperature = tempInput.value;

    if (tempScaleList.value === "celcius") {
        let celciusConvertedTemp = (temperature * (9/5)) + 32;

    const p = document.createElement('p');

    p.textContent = `${temperature} degrees Celcius is ${celciusConvertedTemp} degrees Farenheit.`
    result.appendChild(p);
        } else {
        let farenConvertedTemp = (temperature - 32) * 5/9;

        const p = document.createElement('p');
        p.textContent = `${temperature} degrees Farenheit is ${farenConvertedTemp} degrees Celcius.`
        result.appendChild(p);
        }
    }

convertBtn.addEventListener('click', convertTemp);
