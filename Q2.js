let year1 = 2024; 
let year2 = 2023; 
let year3 = 2000;

isLeapYear(year1); 
isLeapYear(year2); 
isLeapYear(year3); 

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log("Leap year");
    } else {
      console.log("Not a leap year");
    }
  }