var a = 15;
var b = 4;
var m = min(a, b);
var i = m;
while(i <= max(a,b)){
	if(i == max(a,b)){
		return true;
	}
	i = i + m;
}
return false;