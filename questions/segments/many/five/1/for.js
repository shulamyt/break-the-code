var x = 13;
var b = false;
for( var i=0 ; i<4 ; i++ ){
	if( x>10*i && x<10*(i+1) ){
		print(i);
		b = true;
		break;
	}
}
print(b);