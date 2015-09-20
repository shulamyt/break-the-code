var arr = [3, 7, 11, 15];
var d = null;
for(var i = 0; i < arr.length - 1; i += 1){
	var tmp = arr[i+1] - arr[i];
	if(d == null){
		d = tmp;
	}
	else{
		if(d != tmp){
			return false;
		}
	}
}
return true;
