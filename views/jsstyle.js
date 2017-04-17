const getStudentEmail = document.getElementById("registerEmail");
const getStudentPassword = document.getElementById("registerPassword");

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
    
    //get progress bar element and set its value to whatever is entered into the parameter of the function
}