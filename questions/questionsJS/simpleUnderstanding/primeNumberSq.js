var n = 17;

for(var i = 2; i < sqrt(n); i += 1){
	if(n % i == 0){
		return false;
	}
}

return true;