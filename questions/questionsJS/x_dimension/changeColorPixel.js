var m = [[5,2,4], [3,1,7], [2,9,8]];

for (var i = 0; i < m.length; i++){
	var a = m[i];
	for (var j = 0; j < a.length; j++){
		if(a[j] < 5){
			a[j] = 0;
		}
	}
}