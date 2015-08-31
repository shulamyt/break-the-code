var l1 = new List(["y", "d", "h", "a", "w", "s"]);

var p1 = l1.head();
var val = "a";
var c = 0;
while(p1 != null){
	if(p1.value == val){
		return true;
	}
	c = c + 1;
	p1 = p1.next;
}

return -1;
