var x = 33;
if (x > 40) {
	if (x < 50) {
		print ("IN");
	}
	else {
		print ("OUT");	
	}
}
else if (x > 20) {
	if (x < 30) {
		print ("IN");
	}
	else {
		print ("OUT");	
	}
}
else if (x > 0) {
	if (x < 10) {
		print ("IN");
	}
	else {
		print ("OUT");	
	}
}
else {
	print ("OUT");
}
------------------------------
if ( x>0 && x<10 || x>20 && x<30 || x>40 && x<50 ) {
	print ("IN");
} else {
	print ("OUT");
}