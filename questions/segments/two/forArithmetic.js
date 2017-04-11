var x = 27;
var tmp = "1";
for (var i=0 ; i<2 ; i++) {
	if (x>10*2*i && x<10*(2*i+1)) {
		tmp = "2";
		break;
	}
}
print(tmp);