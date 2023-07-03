//APIs
const toCelsiusAPI = '/api/toCelsius';
const toFahrenheitAPI = '/api/toFahrenheit';

// Input field
const temp = document.getElementById('temp');

// Options field
const radioButton = document.getElementsByName('radio-button');

// Button
const convert = document.getElementById('convert');

// Output field
const output = document.getElementById('output');

//Logic
convert.onclick = async () => {
    const value = temp.value;
    const response = radioButton[1].checked ? await fetch(`${toCelsiusAPI}?fahrenheit=${value}`) : await fetch(`${toFahrenheitAPI}?celsius=${value}`);
    
    const data = await response.json();
    output.value = `${data.value}`;
};