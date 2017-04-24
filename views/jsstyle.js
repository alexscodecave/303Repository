const getStudentEmail = document.getElementById("registerEmail");
const getStudentPassword = document.getElementById("registerPassword");
const btnPreviousWeek = document.getElementById("btnPreviousWeek");

function changeSelectValue(val) {
    const changeYesNoComplete = document.getElementById("worksheetCompleteChoice")
    let selectedValue = changeYesNoComplete.options[changeYesNoComplete.selectedIndex].value;
    if (selectedValue === "Yes") {
        document.getElementById("progressBar").value = val;
        const getProgressBarValue = document.getElementById("progressBarValue");
        getProgressBarValue.textContent = "You have completed " + val + "% of this assignments worksheets";
    } else if (selectedValue === "No") {

        getProgressBarValue.textContent = "";
    }
}

function contentChangeForWorksheetOne(val) {
    const changeYesNoComplete = document.getElementById("worksheetCompleteChoice")
    let selectedValue = changeYesNoComplete.options[changeYesNoComplete.selectedIndex].value;
    if (selectedValue === "Yes") {
        selectedValue.value = "No";
        document.getElementById("progressBar").value = val;
        const getProgressBarValue = document.getElementById("progressBarValue");
        getProgressBarValue.textContent = "You have completed " + val + "% of this assignments worksheets";
    } else if (selectedValue === "No") {
        alert("You have only completed 33% of the necessary requirements")
        document.getElementById("progressBar").value = "33";
    }
}

function contentChangeForWorksheetTwo(val) {
    const changeYesNoComplete = document.getElementById("worksheetCompleteChoice")
    let selectedValue = changeYesNoComplete.options[changeYesNoComplete.selectedIndex].value;
    if (selectedValue === "Yes") {
        selectedValue.value = "No";
        document.getElementById("progressBar").value = val;
        const getProgressBarValue = document.getElementById("progressBarValue");
        getProgressBarValue.textContent = "You have completed " + val + "% of this assignments worksheets";
    } else if (selectedValue === "No") {
        alert("You have only completed 66% of the necessary requirements")
        document.getElementById("progressBar").value = "66";
    }
}
function contentChangeForWorksheetThree(val) {
    const changeYesNoComplete = document.getElementById("worksheetCompleteChoice")
    let selectedValue = changeYesNoComplete.options[changeYesNoComplete.selectedIndex].value;
    if (selectedValue === "Yes") {
        selectedValue.value = "No";
        document.getElementById("progressBar").value = val;
        const getProgressBarValue = document.getElementById("progressBarValue");
        getProgressBarValue.textContent = "You have completed " + val + "% of this assignments worksheets";
        alert("Well done on completing 100% of the worksheets")
    } else if (selectedValue === "No") {
        alert("You have only completed 66% of the necessary requirements")
        document.getElementById("progressBar").value = "66";
    }
}

function changeTableData(){
    let tableDataChange = document.getElementById("tbaTableContent");
    const getProgressBarValue = document.getElementById("progressBarValue");
    if(getProgressBarValue.value=="100"){
        alert("It's 100 well done")
        tableDataChange.textContent = "68%"
    }
}

function changeWeekPrevious() {
    const workWeek = document.getElementById("workWeek"); //contains value of element with id of workWeek
    let numberArray = ["1", "2", "3", "4", "5", "6"]
    if (workWeek.innerHTML === "Week 5") {
        workWeek.innerHTML = "Week " + numberArray[3].toString();
    }
    else if (workWeek.innerHTML === "Week 4") {
        workWeek.innerHTML = "Week " + numberArray[2].toString();
    }
    else if (workWeek.innerHTML === "Week 6") {
        workWeek.innerHTML = "Week " + numberArray[4].toString();
    }
    //onclick set innerHTML of this element to week 4
}



function hideWorksheetThree() {
    let workSheetThree = document.getElementById("worksheetThree");
    if (workSheetThree.style.opacity !== 0) {
        workSheetThree.style.opacity = 0;
        workSheetThree.style.display = 'none'
    } else {
        workSheetThree.style.opacity = 1;
        workSheetThree.style.display = 'inline'
    }
}

function hideWorksheetFour() {
    let workSheetFour = document.getElementById("workSheetFour");
    let workSheetTwo = document.getElementById("workSheetTwo");
    let workSheetThree = document.getElementById("workSheetThree");
    if (workSheetFour.style.opacity !== 0) {
        workSheetFour.style.opacity = 0;
        workSheetFour.style.display = 'none'
    } else {
        workSheetTwo.style.opacity = 1;
        workSheetTwo.style.display = 'inline';
        workSheetThree.style.opacity = 1;
        workSheetThree.style.display = 'inline';
        workSheetFour.style.opacity = 1;
        workSheetFour.style.display = 'inline';
    }
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


