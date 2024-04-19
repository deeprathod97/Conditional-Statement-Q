  let student1Grade = 95;
  let student2Grade = 82;
  let student3Grade = 75;
  let student4Grade = 67;
  let student5Grade = 50;
  
  determineGrade(student1Grade); 
  determineGrade(student2Grade); 
  determineGrade(student3Grade); 
  determineGrade(student4Grade); 
  determineGrade(student5Grade); 
  
function determineGrade(grade) {
    if (grade >= 90) {
      console.log("A");
    } else if (grade >= 80 && grade <= 89) {
      console.log("B");
    } else if (grade >= 70 && grade <= 79) {
      console.log("C");
    } else if (grade >= 60 && grade <= 69) {
      console.log("D");
    } else {
      console.log("F");
    }
  }

  