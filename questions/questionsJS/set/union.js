var l1 = new List(["x", "b", "k", "p", "r"]);
var l2 = new List(["x", "b", "r", "p", "r"]);

var p2 = l2.head();
while (p2 != null){
	var p1 = l1.head();
	var ok = false;
	while (p1 != null) {
	    if (p1.value == p2.value)) {
	        ok = false;
	        break;
	    }
	}
	if(ok){
		var n = new Node();
		n.value = val;	
		l1.last.next = n;
	}
	p2 = p2.next;
}
print(p1);
print(p2);