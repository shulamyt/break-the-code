var l1 = new List(["y", "d", "h", "a", "w", "s"]);

var p1 = l1.head();

while(p1 != null){
	if(p1.value == "a"){
		return true;
	}
	p1 = p1.next;
}