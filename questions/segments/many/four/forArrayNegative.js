var a = [[10,20] , [30,40] , [50,60]];
var b = false;
for (var i=0 ; i<a.length ; i++) {
	if(x<a[i][0] && x>a[i][1]){
		print(i);
		b = true;
		break;
	}
}
print(b);