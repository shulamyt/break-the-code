var l1 = new List(["x", "b", "k", "p", "r"]);
var l2 = new List(["x", "b", "r", "p", "r"]);

var p1 = l1.head();

while(p1 != null){
	var p2 = l2.head();
	while(p2 != null){
		if(p1.value == p2.value){
			if(p1.prev){
				p1.prev.next = p1.next;	
			}
			else{
				l1.head = p1.next;
			}
		}
		p2 = p2.next;
	}
	p1 = p1.next;
}

print(p1);
print(p2);