const getStudentGrade = (name, marks) => {
    let grade = "";
  
    if (marks >= 80) {
      grade = "A+";
    } else if (marks >= 70) {
      grade = "A";
    } else if (marks >= 60) {
      grade = "A-";
    } else if (marks >= 50) {
      grade = "B";
    } else if (marks >= 40) {
      grade = "C";
    } else if (marks >= 33) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    return `${name} পেয়েছে ${marks} নম্বর এবং গ্রেড হচ্ছে ${grade}`;
  };
  
  console.log(getStudentGrade("Rahim", 85));  

//   const getStudentGrade = (name, marks) => {
//     let grade = "";
  
//     switch (true) {
//       case marks >= 80:
//         grade = "A+";
//         break;
//       case marks >= 70:
//         grade = "A";
//         break;
//       case marks >= 60:
//         grade = "A-";
//         break;
//       case marks >= 50:
//         grade = "B";
//         break;
//       case marks >= 40:
//         grade = "C";
//         break;
//       case marks >= 33:
//         grade = "D";
//         break;
//       default:
//         grade = "F";
//     }
  
//     return `${name} পেয়েছে ${marks} নম্বর এবং গ্রেড হচ্ছে ${grade}`;
//   };
  
//   console.log(getStudentGrade("Rajiul", 67));  
  
  