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
    
}

//function to increase value of progress bar every time work is dropped into completed divs
function increaseProgress(val){
    document.getElementById("workSheetProgress").value=val;
    //get progress bar element and set its value to whatever is entered into the parameter of the function
}