if (x>40) {
	if (x<50) {
		print ("IN");
	}
	else if (x>60) {
		if (x<70) {
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
else if (x<30) {
	if (x>20) {
		print ("IN");
	}
	else if (x<10) {
		if (x>0) {
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
else {
	print ("OUT");
}