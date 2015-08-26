var l1 = new List([1, 5, 8]);
var l2 = new List([3, 4, 9]);

var p1 = l1.head();
var p2 = l2.head();

var l = new List();
var p = l.head();

while(p1 != null && p2 !=null){
	var n = new Node();
	if(p1.value > p2.value){
		n.value = p1.value;
	}
	else{
		n.value = p2.value;
	}		
	if(p == null){
		p = n;
	}
	else{
		p.next = n;
	}
	p  = p.next;
	p1 = p1.next;
	p2 = p2.next;
}

while(p1 != null){
	var n = new Node();
	n.value = p1.value;
	if(p == null){
		p = n;
	}
	else{
		p.next = n;
	}
}

while(p2 != null){
	var n = new Node();
	n.value = p2.value;
	if(p == null){
		p = n;
	}
	else{
		p.next = n;
	}
}

l.print();