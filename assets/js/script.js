function main () {
	var day = document.getElementById("day-of-birth").value;
	var month = document.getElementById("month-of-birth").value;
	var year = document.getElementById("year-of-birth").value;
	// Getting CC and YY
	// var centuryCentury = parseInt(year.slice(0,2));
	// var yearYear = parseInt(year.slice(2,4));

	var a = Math.floor((14 - month) / 12);
    var y = year - a;
    var m = month + 12 * a - 2;
    dayOfTheWeek = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
        Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
	// var dayOfTheWeek = Math.round( ( ( (centuryCentury/4) -2*centuryCentury-1) + ((5*yearYear/4) ) + ((26*(month+1)/10)) + day ) % 7);

	// alert(dayOfTheWeek);
	maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
	femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


	if(document.getElementById('males').checked) {
		var gender = 'male';
	} else {
		var gender = 'female';
	}
	// alert(gender);

	if(day < 1 || day > 31) {
		alert("You have entered an invalid date!");
	}
	else if(month < 1 || month > 13) {
		alert("You have entered an invalid month!")
	}
	else if(year.length!=4) {
		alert("Invalid Year")
	}
	else if(gender === 'male' && dayOfTheWeek === 0) {
		alert("Your Akan name is " + maleAkanNames[0]);
	}
	else if(gender === 'male' && dayOfTheWeek === 1) {
		alert("Your Akan name is " + maleAkanNames[1]);
	}
	else if(gender === 'male' && dayOfTheWeek === 2) {
		alert("Your Akan name is " + maleAkanNames[2]);
	}
	else if(gender === 'male' && dayOfTheWeek === 3) {
		alert("Your Akan name is " + maleAkanNames[3]);
	}
	else if(gender === 'male' && dayOfTheWeek === 4) {
		alert("Your Akan name is " + maleAkanNames[4]);
	}
	else if(gender === 'male' && dayOfTheWeek === 5) {
		alert("Your Akan name is " + maleAkanNames[5]);
	}
	else if(gender === 'male' && dayOfTheWeek === 6) {
		alert("Your Akan name is " + maleAkanNames[6]);
	}
	else if(gender === 'female' && dayOfTheWeek === 0) {
		alert("Your Akan name is " + femaleAkanNames[0]);
	}
	else if(gender === 'female' && dayOfTheWeek === 1) {
		alert("Your Akan name is " + femaleAkanNames[1]);
	}
	else if(gender === 'female' && dayOfTheWeek === 2) {
		alert("Your Akan name is " + femaleAkanNames[2]);
	}
	else if(gender === 'female' && dayOfTheWeek === 3) {
		alert("Your Akan name is " + femaleAkanNames[3]);
	}
	else if(gender === 'female' && dayOfTheWeek === 4) {
		alert("Your Akan name is " + femaleAkanNames[4]);
	}
	else if(gender === 'female' && dayOfTheWeek === 5) {
		alert("Your Akan name is " + femaleAkanNames[5]);
	}
	else if(gender === 'female' && dayOfTheWeek === 6) {
		alert("Your Akan name is " + femaleAkanNames[6]);
	}
	else {
		alert("Error processing your akan name!")
	}
	
}
