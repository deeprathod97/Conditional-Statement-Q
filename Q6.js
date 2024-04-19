  let userTemperature = 25; 
  
  categorizeTemperature(userTemperature);
  

  function categorizeTemperature(temperature) {
    if (temperature >= 30) {
      console.log("Hot");
    } else if (temperature >= 15 && temperature < 30) {
      console.log("Moderate");
    } else {
      console.log("Cold");
    }
  }
  