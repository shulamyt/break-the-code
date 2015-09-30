var arr = [1,2,3,4,5,6,7,8,9,0]
var n = 5
for (var i = 0; i < arr.length; i++){
	var p = n - arr[i];
	for (var j = 0; j < arr.length; j++){
		if(p == arr[j]){
			print(arr[i] + "+" p)
		}
	}
}
       