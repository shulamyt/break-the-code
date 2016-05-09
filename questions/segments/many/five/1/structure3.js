var x = 33;
if (x>40) {
	if (x<50) {
		print ("IN");
	}
	else {
		print ("OUT");
	}
}
else if (x<30) {
	if (x>20) {
		print ("IN");
	}
	else if (x<10) {
		if(x>0){
			print ("IN");
		}
		else {
			print ("OUT");
		}
	}
	else {
		print ("OUT");
	}
}
else{
	print ("OUT");
}

------------------------------------------------
if(x>40 && x<50 || x<30 && (x<20 || x<10 && x>0){
	print ("IN");
}
else {
	print ("OUT");
}