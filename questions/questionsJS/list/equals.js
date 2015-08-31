var l1 = new List(["y", "d", "h"]);
var l2 = new List(["a", "w", "s"]);

var p1 = l1.head();
var p2 = l2.head();

while(p1 != null && p2 != null){
	if(p1.value != p2.value){
		return false;
	}
	p1 = p1.next;
	p2 = p2.next;
}

if(p1 != null && p2 == null || p1 == null && p2 != null){
	return false;
}

return true;