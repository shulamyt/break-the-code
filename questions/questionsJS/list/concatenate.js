var l1 = new List(["y", "d", "h"]);
var l2 = new List(["a", "w", "s"]);

var p1 = l1.head();
var p2 = l2.head();

while(p1 != null){
	p1 = p1.next;
}

p1.next = p2;

p = l1.head();
while(p != null){
	print(p.value);
	p = p.next();
}
