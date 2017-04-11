var x = 35;
var tmp = "1";
for (var i=0 ; i<3 ; i++) {
	if (x>10*2*i && x<10*(2*i+1)) {
		tmp = "2";
		break;
	}
}
print(tmp);