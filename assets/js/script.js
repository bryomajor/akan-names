var DD = Number(prompt("Enter day:"));
var MM = Number(prompt("Enter month:"));
var CC = Number(prompt("Enter century:"));
var YY = Number(prompt("Enter year"));

/*function maleAkanName () {
		var d = Math.round(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
    var akanName;
    
    switch(d) {
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

maleAkanName();*/

function femaleAkanName () {
    var d = Math.round(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
var akanName;

switch(d) {
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

femaleAkanName();