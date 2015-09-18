var l1 = new List(["x", "b", "k", "p", "q"]);
var l2 = new List(["x", "b", "r", "p", "q"]);

var p2 = l2.head();
while (p2 != null){
	var p1 = l1.head();
	var ok = true;
	while (p1 != null) {
	    if (p1.value == p2.value)) {
	        ok = false;
	        break;
	    }
	}
	if(ok){
		var n = new Node();
		n.value = p2.value;	
		l1.last.next = n;
	}
	p2 = p2.next;
}
l1.print();
// l2.print();