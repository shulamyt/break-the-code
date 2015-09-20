var a = 7;
var b = 21;

var k = min(a,b);

for(var i = 2; i <= k; i += 1){
	if(a % i == 0 && b % i == 0){
		return false;
	}
}
return true;