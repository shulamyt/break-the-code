var a = [1,2,3,5,6,7,8];
var b = [5,6,7,8,1,2,3];

var aa = a.concat(a);

var flag = false;

var j = 1;

for (var i = 0; i < aa.length; i++){
	if (flag == true){
		if(b[j] == aa[i]){
			if(j == b.length - 1){
				return true;
			}
			else{
				j = j + 1;
			}
		}
		else{
			j = 1;
			flag == false;
		}
	}
	else{
		if(b[0] == aa[i]){
			flag = true;
		}
	}
}
return false;