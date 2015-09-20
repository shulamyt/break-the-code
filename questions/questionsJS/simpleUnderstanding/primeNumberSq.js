var n = 17;

for(var i = 2; i < n ^(1/2) ; i += 1){
	if(n % i == 0){
		return false;
	}
}

return true;