var l1 = new List(["x", "b", "r", "p", "q"]);
var p = l1.head();
var val = "r";
var f = false;
while (p != null) {
    if (p.value == val)) {
        f = false;
        break;
    }
}
if(!f){
	var n = new Node();
	n.value = val;	
	l1.last.next = n;
}
print(l1);