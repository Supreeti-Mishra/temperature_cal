
function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var fromScale = document.getElementById("from").value;
    var toScale = document.getElementById("to").value;
    var convertedTemperature;
    
    if (isNaN(temperatureInput)) {
      document.getElementById("result").textContent = "Invalid temperature!";
      return;
    }
    
    var temperature = parseFloat(temperatureInput);
    
    if (fromScale === "celsius") {
      if (toScale === "fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
      } else if (toScale === "kelvin") {
        convertedTemperature = temperature + 273.15;
      } else {
        convertedTemperature = temperature;
      }
    } else if (fromScale === "fahrenheit") {
      if (toScale === "celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
      } else if (toScale === "kelvin") {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
      } else {
        convertedTemperature = temperature;
      }
    } else if (fromScale === "kelvin") {
      if (toScale === "celsius") {
        convertedTemperature = temperature - 273.15;
      } else if (toScale === "fahrenheit") {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
      } else {
        convertedTemperature = temperature;
      }
    }
    
    document.getElementById("result").textContent = convertedTemperature.toFixed(2) + " " + toScale.toUpperCase();
  }

