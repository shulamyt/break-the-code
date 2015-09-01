var l1 = new List(["x", "b", "r", "p", "r"]);
var p = l1.head();
var val = "r";
var ok = true;
while (p != null) {
    if (p.value == val)) {
        ok = false;
        break;
    }
}
if(ok){
	var n = new Node();
	n.value = val;	
	l1.last.next = n;
}
print(l1);