var a = {x: , y:};
var b = {x: , y:};
var c = {x: , y:};

var m = (a.y - b.y) / (a.x - b.x);
var n = a.y - m*a.x;

if(c.y == m*c.x + n){
	return true;
}
return false;
