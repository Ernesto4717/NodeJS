
window.onkeydown = function checkKey(event) {
	var opcion=event.keyCode;
	//alert(opcion);
	switch (opcion) {
	case 96:
		print("0");
		break;
	case 97:
		print("1");
		break;
	case 98:
		print("2");
		break;
	case 99:
		print("3");
		break;
	case 100:
		print("4");
		break;
	case 101:
		print("5");
		break;
	case 102:
		print("6");
		break;
	case 103:
		print("7");
		break;
	case 104:
		print("8");
		break;
	case 105:
		print("9");
		break;
	case 107:
		print("+");
		break;
	case 109:
		print("-");
		break;
	case 106:
		print("*");
		break;
	case 111:
		print("/");
		break;
	case 53:
		print("%");
		break;
	case 13:
		operation();
		break;
	case 110:
		print(".");
		break;
	case 46:
		clean();
		break;
	}
	
};


function operation() {
	
	var lastNumber=document.getElementById("id").value;
	 try {
		    var input = eval(lastNumber);
		   
		    document.getElementById("id").value = input;
		  } catch(err){
		      document.calc.result.value="Error";
		    }
};

function clean() {
	document.getElementById("id").value = "";
}
function print(number) {
	var lastNumber=document.getElementById("id").value;
	document.getElementById("id").value = lastNumber+number;
};

console.log("a");