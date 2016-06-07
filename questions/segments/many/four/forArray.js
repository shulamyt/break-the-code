var x = 51;
var a = [[0,10] , [20,30] , [40,50] , [60,70]];
var tmp = "1";
for (var i=0 ; i<a.length ; i++) {
	if (x<a[i][0] && x>a[i][1]) {
		tmp = "2";
		break;
	}
}
print(tmp);