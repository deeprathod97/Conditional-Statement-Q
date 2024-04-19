  let number1 = 25;
  let number2 = 40;
  let number3 = 15;
  
  findLargestNumber(number1, number2, number3);
  

  function findLargestNumber(num1, num2, num3) {
    let largestNumber = num1;
  
    if (num2 > largestNumber) {
      largestNumber = num2;
    }
  
    if (num3 > largestNumber) {
      largestNumber = num3;
    }
  
    console.log(`The largest number is: ${largestNumber}`);
  }