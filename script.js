function control(){
    var homeworkPoints = document.getElementById("HomeworkPoints").value;
    var participationPoints = document.getElementById("ParticipationPoints").value;
    var testPoints = document.getElementById("TestPoints").value;

    document.getElementById("CurrentGrade").value = 0

    convertArrayStringToNumber(homeworkPoints,'Homework');
    convertArrayStringToNumber(participationPoints,'Participation');
    convertArrayStringToNumber(testPoints,'Test');

    //ue array and calc grade

}

function convertArrayStringToNumber(str, idThing) {
    var finalValue1 = str.split(",");
    for(var i = 0; i<finalValue1.length; i++){
         finalValue1[i] = parseInt(finalValue1[i],10);
    }
    averageArray(finalValue1,idThing);
}

function averageArray(arr,idThing) {
    var x = 0;
    for(var i = 0; i<arr.length; i++){
        x = x + arr[i];
    }
    if(x>0){
        x = x/arr.length;
    }
    document.getElementById(idThing + "Grade").innerHTML='<p>Grade:</p>'+ '<p>' + displayGrades(x) + '</p>';
    calculateCurrentGrade(x,idThing);
}

function displayGrades(z){
    if(z<=59){
        return "F";
    }
    if(z<=69){
        return "D";
    }
    if(z<=79){
        return "C";
    }
    if(z<=89){
        return "B";
    }
    if(z>90){
        return "A";
    }
    if(isNaN(z)){
        alert("There is an error!");
        location.reload();
    }
}

function calculateCurrentGrade(avg,idThing){
    var weight = document.getElementById(idThing + "Weight").value / 100;
    var grade = avg * weight;
    console.log(grade);
    averages.push(grade);
    displayCurrentGrade()
}

var averages = [];

function displayCurrentGrade(){
    console.log(averages);
    var grade = 0
    for(var i = 0; i < averages.length; i++){
        grade += averages[i]
    }
    document.getElementById("CurrentGrade").innerHTML = Math.round(grade);
    gradeNeeded(grade);
    determminePageColor(grade)
}

function gradeNeeded(x){
    var y = document.getElementById("GradeNeeded").value;
    var z = document.getElementById("FinalWeight").value;

    var gradeNeeded1 = y-(1-(z/100))*x;
    console.log(gradeNeeded1);
    var finalGrade = 100*(gradeNeeded1/z)

    console.log(finalGrade)
    document.getElementById("GradeNeededonFinal").innerHTML = finalGrade;
    document.getElementById("myButton").style.display = "none"
}

function determminePageColor(z){

    if(z<=59){
        document.body.style.backgroundColor = "red";
        return
    }
    if(z<=69){
        document.body.style.backgroundColor = "orange";
        return
    }
    if(z<=79){
        document.body.style.backgroundColor = "yellow";
        return;
    }
    if(z<=89){
        document.body.style.backgroundColor = "green";
        return;
    }
    if(z>90){
        document.body.style.backgroundColor = "blue";
        return;
    }
}

function reload(){
    location.reload();
}


