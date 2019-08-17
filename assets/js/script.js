// Get the inputed values
var dayOfBirth = Number(document.getElementById("day-of-birth").value);
var monthOfBirth = Number(document.getElementById("month-of-birth").value);
var inputedYear = [document.getElementById("year-of-birth").value];
var centuryOfBirth = Number(inputedYear.slice(0,2));
var yearOfBirth = Number(inputedYear.slice(2,4));

// Calculate male Akan name
function maleAkanName () {
	var dayIndex = Math.round(( ( (centuryOfBirth/4) -2*centuryOfBirth-1) + ((5*yearOfBirth/4) ) + ((26*(monthOfBirth+1)/10)) + dayOfBirth) % 7);
    var akanName;
    
    switch(dayIndex) {
    		case 0:
        akanName = "Kwasi";
        alert("Kwasi");
        break;
        case 1:
        akanName = "Kwadwo";
        alert("Kwadwo");
        break;
        case 2:
        akanName = "Kwabena";
        alert("Kwabena");
        break;
        case 3:
        akanName = "Kwaku";
        alert("Kwaku");
        break;
        case 4:
        akanName = "Yaw";
        alert("Yaw");
        break;
        case 5:
        akanName = "Kofi";
        alert("Kofi");
        break;
        case 6:
        akanName = "Kwame";
        alert("Kwame");
        break;
        default:
        akanName = "Please input the correct details!"
        alert("Please input the correct details!")
    }
}


// Calculate female Akan name
function femaleAkanName () {
    var dayIndex = Math.round(( ( (centuryOfBirth/4) -2*centuryOfBirth-1) + ((5*yearOfBirth/4) ) + ((26*(monthOfBirth+1)/10)) + dayOfBirth ) % 7);
    var akanName;

    switch(dayIndex) {
        case 0:
        akanName = "Akosua";
        alert("Akosua");
        break;
        case 1:
        akanName = "Adwoa";
        alert("Adwoa");
        break;
        case 2:
        akanName = "Abenaa";
        alert("Abenaa");
        break;
        case 3:
        akanName = "Akua";
        alert("Akua");
        break;
        case 4:
        akanName = "Yaa";
        alert("Yaa");
        break;
        case 5:
        akanName = "Afua";
        alert("Afua");
        break;
        case 6:
        akanName = "Ama";
        alert("Ama");
        break;
        default:
        akanName = "Please input the correct details!"
        alert("Please input the correct details!")
    }
}

// Convert the calculate Akan name functions into variables
var femaleChosen = femaleAkanName();
var maleChosen = maleAkanName();

// Gets the chosen checkbox and runs one of the calculate Akan name functions
function yourSubmission() {
    // Get the checkbox
    var female = document.getElementById("females");
    var male = document.getElementById("males");
  
    // If the female checkbox is checked, run the female function || male checkbox is checked, run the male function
    if (female.checked == true){
      alert(femaleChosen);
    } else {
      alert(maleChosen);
    }
  }

  document.getElementById("answerArea").innerHTML = yourSubmission();