var teamJohn, teamMike, teamMarry, avgJohn = 0, avgMike = 0, avgMarry = 0;

//Array of all Team with predefined data
teamJohn = [89, 120, 103];
teamMike = [116, 94, 123];
teamMarry = [97, 134, 105];

for (var i = 0; i < teamJohn.length; i++) {
    avgJohn += teamJohn[i];
    avgMike += teamMike[i];
    avgMarry += teamMarry[i];
}

avgJohn /= teamJohn.length;
avgMike /= teamMike.length;
avgMarry /= teamMarry.length;

console.log("Score Of John's Team is 89, 120, 103 & Average Score is : " + avgJohn);
console.log("Score Of Mike's Team is 116, 94, 123 & Average Score is : " + avgMike);
console.log("Score Of John's Team is 105, 134, 105 & Average Score is : " + avgMarry);

console.log("\nResult of John's Team and Mike's Team (Default Data)\n");
JohnvsMike();

console.log("\nResult of John's Team, Mike's Team and Marry's Team (Default Data)");
JohnvsMikevsMarry();
JohnvsMike2();

// Q.2 Best of John vs Mike
//Comparing John and Mike -----Function
function JohnvsMike() {
    
    if (avgJohn > avgMike) {
        console.log("John's Team is winner and avrage score is " + avgJohn + "Points");
    }
    else if (avgMike > avgJohn) {
        console.log("Mike's Team is winner and avrage score is " + avgMike + " Points");
    }
    else {
        console.log("Draw");
    }
    
}

//Q 4 Best of John,Mike & Marry

//Comapring John, Mike and Marry
function JohnvsMikevsMarry()
{
    if (avgJohn > avgMike && avgJohn > avgMarry) {
        console.log("John's Team is winner with avrage score is " + avgJohn + " Points");
    }
    else if (avgMike > avgMarry && avgMike > avgJohn) {
        console.log("Mike's Team is Winner with Average Score is " + avgMike + " Points");
    }
    else {
        if (avgJohn == avgMarry && avgMarry == avgMike) {
            console.log("Draw");
        }
        else {
            console.log("Marry's Taem is Winner with Average Score " + avgMarry + " Points")
        }
    }
}

//Q 3 Best of John vs Mike With Default ScoreCard Changed 
function JohnvsMike2()
{
teamJohn = [105, 108, 123,108,78];
teamMike = [102, 108, 122,109,77];

avgJohn = 0;
avgMike = 0;

for (var i = 0; i < teamJohn.length; i++) {
    avgJohn += teamJohn[i];
    avgMike += teamMike[i];
}
avgJohn /= teamJohn.length;
avgMike /= teamMike.length;

console.log("\nScore Of John's Team is 105,108,123,108,78 & Average Score is : " + avgJohn);
console.log("Score Of Mike's Team is 102,108,122,109,77 & Average Score is : " + avgMike);

JohnvsMike();
}