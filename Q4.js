
  // Example usage:
  let person1Age = 20;
  let person1Citizenship = true; 
  
  let person2Age = 16;
  let person2Citizenship = false; 
  
  checkVotingEligibility(person1Age, person1Citizenship); 
  // Output: You are eligible to vote
  checkVotingEligibility(person2Age, person2Citizenship);
   // Output: You are not eligible to vote
  



  function checkVotingEligibility(age, isCitizen) {
    if (age >= 18 && isCitizen) {
      console.log("You are eligible to vote");
    } else {
      console.log("You are not eligible to vote");
    }
  }
  