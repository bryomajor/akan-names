function main () {
	var day = Number(document.getElementById("day-of-birth").value);
	var month = Number(document.getElementById("month-of-birth").value);
	var year = document.getElementById("year-of-birth").value;
	// Getting CC and YY
	var centuryCentury = Number(year.slice(0,2));
	var yearYear = Number(year.slice(2,4));

	// Getting selected gender from radio button
	var genderSelected = document.getElementsByName("gender");

	// Here is a function to determine the gender selected
	function genderPicked() {
		// To loop through the two genders to get the one picked
		for (var gender of genderSelected) {
			if (gender.checked){
				return gender.value;
			}
		}
	}

	// Storing the selected gender as a variable
	var genderValue = genderPicked();

	// Validating day by creating a function that returns a boolean
	function dayValid () {
		if (day < 1 || day > 31) {
			alert("Invalid day")
			return false;
		} else {
			return true;
		}
	}

	// Validating day
	function monthValid () {
		if (month < 1 || month > 12) {
			alert ("Invalid month");
			return false;
		} else {
			return true;
		}
	}

	// Storing the results of the validation functions as variables
	var isDayValid = dayValid();
	var isMonthValid = monthValid();

	// Akan name calculator
	var dayIndex = Math.round(( ( (centuryCentury/4) -2*centuryCentury-1) + ((5*yearYear/4) ) + ((26*(month+1)/10)) + day) % 7);
  var akanName;

	// Print male name
	if (genderValue === "male") {
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
	} else if (genderValue = "female") { // Calculate female Akan name
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
	} else {
				alert("Please try again with the correct data.")
	}
}
