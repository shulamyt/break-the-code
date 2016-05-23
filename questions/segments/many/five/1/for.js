var x = 13;
var b = false;
for( var i=0 ; i<3 ; i++ ){
	if( x>10*2*i && x<10*(2*i+1) ){
		print(i);
		b = true;
		break;
	}
}
print(b);