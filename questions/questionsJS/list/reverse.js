var l1 = new List(["y", "d", "h"]);

var p1 = l1.head();
var p2 = null;

while(p1 != null){
	if(p2 == null){
		p2 = p1;
	}
	else{
		var tmp = p2;
		p2 = p1;
		p2.next = tmp;
	}
	p1 = p1.next;
	p2 = p2.next;
}
