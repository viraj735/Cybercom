var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, isMarkBmiHigher;

// Inputs of Johns using prompt
alert("Please Enter the Details of John");
massJohn = prompt("Please Enter the Mass Of John (In Kilogram)");
heightJohn = prompt ("Please Enter the Heigt of John (In Metre)");

//Inputs of Mark using prompt
alert("Please Enter the Details of Mark");
massMark  = prompt("Please Enter the Mass Of Mark (In Kilogram)");
heightMark = prompt ("Please Enter the Heigt of Mark (In Metre)");

//Calculating BMI of john and mark
bmiJohn = massJohn / (heightJohn * heightJohn );
bmiMark = massMark / (heightMark * heightMark );

//Comparing bmi of mark and john
isMarkBmiHigher = bmiMark > bmiJohn ;

//Final Output
console.log("Is BMI of Mark's heigher than John's BMI ? " + isMarkBmiHigher );