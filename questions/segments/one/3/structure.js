var x = 13;
if(x < 10){
	print ("OUT");
	return;
}
// else ?
if(x > 20){
	print ("OUT");
	return;
}
// else ?
print ("IN");

------------------------

var x = 13;
if(x < 10){
	print ("OUT");
}
else {
	if (x > 20) {
		print ("OUT");
	}
	else {
		print ("IN");
	}
}

-----------------------

var x = 13;
if(x < 10){
	print ("OUT");
}
else if(x > 20){
	print ("OUT");
}
else{
	print ("IN");
}