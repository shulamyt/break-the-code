var l1 = new List(["y", "d", "h"]);
var l2 = new List();

var p1 = l1.head();
var p2 = null;

while(p1 != null){
	var n = new Node();
	n.value = p1.value;	
	if(p2 == null){
		p2 = n;
	}
	else{
		p2.next = n;
	}
	p1 = p1.next;
}

var p = l1.head();
p.value = "w";

p = l1.head();
while(p.next != null){
	print(p.value);
}