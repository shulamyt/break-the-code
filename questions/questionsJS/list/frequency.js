var l1 = new List(["y", "d", "h", "a", "w", "s", "d"]);

var p1 = l1.head();
var val = "d";
var c = 0;
while(p1 != null){
	if(p1.value == val){
		c = c + 1;
	}
	p1 = p1.next;
}

return c;
