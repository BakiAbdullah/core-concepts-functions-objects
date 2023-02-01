/*
function functionName (parameter) {
  function body
  return
}
var returnedValue = functionName(parameters value);
*/


function getAverage (assignment1, assignment2, assignment3) {
  const total = assignment1 + assignment2 + assignment3; 
  const average = total / 3;

  return average;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 60;

var averageMarks = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
var fullAverageMarks = parseInt(averageMarks);
console.log(fullAverageMarks);