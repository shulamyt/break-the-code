var l1 = new List(["h", "y", "a", "d", "h", "a", "w", "s", "h", "d"]);

var p1 = l1.head();
var val = "a";
var c = 0;
while(p1 != null){
	if(p1.value == val){
		c = c + 1;
	}
	p1 = p1.next;
}

return c;
