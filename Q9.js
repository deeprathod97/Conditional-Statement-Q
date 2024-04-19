 let principalAmount = 100000;
  let interestRate = 7; // 5%
  let timePeriod = 2; // 2 years

  function computeSimpleInterest(principal, rate, time) {
    
    if (principal <= 0 || rate <= 0 || time <= 0) {
      console.log("Error: All inputs must be positive numbers.");
      return; 
    }
  
    
    let interest = (principal * rate * time) / 100;
  
    console.log(`Principal Amount: ${principal.toFixed(2)}`);
    console.log(`Interest Rate: ${rate}%`);
    console.log(`Time Period: ${time} years`);
    console.log(`Simple Interest: ${interest.toFixed(2)}`);
  }
  
  
  computeSimpleInterest(principalAmount, interestRate, timePeriod);
  