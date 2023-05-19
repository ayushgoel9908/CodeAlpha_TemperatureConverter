function convertTemp() {
	var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
	var celsius = parseFloat(document.getElementById("celsius").value);
	var result = document.getElementById("result");
  
	if (isNaN(fahrenheit) && isNaN(celsius)) {
	  result.innerHTML = "Please enter a temperature to convert.";
	}
	else if (!isNaN(fahrenheit) && isNaN(celsius)) {
	  celsius = (fahrenheit - 32) * 5 / 9;
	  document.getElementById("celsius").value = celsius.toFixed(2);
	  result.innerHTML = fahrenheit.toFixed(2) + "°F = " + celsius.toFixed(2) + "°C";
	}
	else if (isNaN(fahrenheit) && !isNaN(celsius)) {
	  fahrenheit = celsius * 9 / 5 + 32;
	  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
	  result.innerHTML = celsius.toFixed(2) + "°C = " + fahrenheit.toFixed(2) + "°F";
	}
	else {
	  result.innerHTML = "Please enter only one temperature to convert.";
	}
  }

  