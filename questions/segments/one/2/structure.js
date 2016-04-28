var x = 13;
if (x < 10){
	print ("OUT");
}
else if (x > 20){
	print ("OUT");
}
else {
	print ("IN");
}

-----------------------

var x = 13;
if (x < 10){
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

------------------------
//not realy work .. it need to be inside func todo return
var x = 13;
if(x < 10){
	print ("OUT");
	return;
}
if(x > 20){
	print ("OUT");
	return;
}
print ("IN");
