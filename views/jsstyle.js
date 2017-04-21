const getStudentEmail = document.getElementById("registerEmail");
const getStudentPassword = document.getElementById("registerPassword");
const btnPreviousWeek = document.getElementById("btnPreviousWeek");

function changeWeekPrevious(){
    const workWeek = document.getElementById("workWeek"); //contains value of element with id of workWeek
    if(workWeek.innerHTML==="Week 5"){
        workWeek.innerHTML="Week 4";
    }
     //onclick set innerHTML of this element to week 4
}

function changeWeekNext(){
    const workWeek = document.getElementById("workWeek"); //contains value of element with id of workWeek
    workWeek.innerHTML="Week 6"; //onclick set innerHTML of this element to week 4
}

function hideWorksheetOne(){
    let workSheetOne = document.getElementById("worksheetOne");
    if(workSheetOne.style.opacity!==0){
        workSheetOne.style.opacity=0;
        workSheetOne.style.display='none'
    }else{
        workSheetOne.style.opacity=1;
        workSheetOne.style.display='inline'
    }
}

function hideWorksheetThree(){
    let workSheetThree = document.getElementById("worksheetThree");
    if(workSheetThree.style.opacity!==0){
        workSheetThree.style.opacity=0;
        workSheetThree.style.display='none'
    }else{
        workSheetThree.style.opacity=1;
        workSheetThree.style.display='inline'
    }
}

function hideWorksheetFour(){
    let workSheetFour = document.getElementById("workSheetFour");
    let workSheetTwo = document.getElementById("workSheetTwo");
    let workSheetThree = document.getElementById("workSheetThree");
    if(workSheetFour.style.opacity!==0){
        workSheetFour.style.opacity=0;
        workSheetFour.style.display='none'
    }else{
        workSheetTwo.style.opacity=1;
        workSheetTwo.style.display='inline';
        workSheetThree.style.opacity=1;
        workSheetThree.style.display='inline';
        workSheetFour.style.opacity=1;
        workSheetFour.style.display='inline';
    }
}

function checkPWLength(){
    if(getStudentPassword.length<6){
        alert("Please enter a password longer than 6 characters");
    }
}

function preventDefaultBrowserAct(event) {
    event.preventDefault(); //prevent default 
    //prevents the browser from acting in the default way
}

function dragDiv(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dropDiv(event) {
    event.preventDefault();
    var getDivText = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(getDivText));
    // const leftBox = document.getElementById("leftUserBox");
    // const middleBox = document.getElementById("middleUserBox");
    // const rightBox = document.getElementById("rightUserBox");
    // if($('#leftUserBox').find('#designModule').length==1){
    //     alert("Correct")
    // }else if($('#middleUserBox').find('#moduleTwo').length==1){
    //     alert("Correct on module two")
    // }
    // else if($('#rightUserBox').find('#moduleThree').length==1){
    //     alert("Correct on module three")
    // }
}

function showModule(moduleName) {
    //get elements name of modules and put value in moduleElement
    let moduleElement = document.getElementsByName("modules");
    //loop over element with a name of modules and change the
    //display to none
    for (let moduleIndex = 0; moduleIndex < moduleElement.length; moduleIndex++) {
       moduleElement[moduleIndex].style.display = "none";  
    }
    //get id element of module name in parameter and change its style to block when clicked
    document.getElementById(moduleName).style.display = "block"; 
}
//function to increase value of progress bar every time work is dropped into completed divs
function increaseProgress(val){
    document.getElementById("workSheetProgress").value=val;
    const getProgressBarValue = document.getElementById("progressBarValue");
    getProgressBarValue.textContent=val + "%";
    if(val===100){
        getProgressBarValue.textContent="Work completed for the work"
    }
    //get progress bar element and set its value to whatever is entered into the parameter of the function
}



