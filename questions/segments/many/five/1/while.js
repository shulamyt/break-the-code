// same as for?
var x = 13;
var b = false;
var i = 0;
while( i<5 ){
	if( x>10*i && x<10*(i+1) ){
		print(i);
		b = true;
		break;
	}
	i ++;
}
print(b);