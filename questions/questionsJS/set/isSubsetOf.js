var l1 = new List(["b", "r"]);
var l2 = new List(["x", "b", "r", "p", "r"]);

var p2 = l2.head();
while(p2 != null){
	var p1 = l1.head();
	if(p1.value == p2.value){
		var p22 = p2;
		var ok = true;
		while(p1 != null && p22 != null){
			if(p1.value != p22.value){
				ok = false;
				break;
			}
			p1  = p1.next;
			p22 = p22.next;
		}
		if(p1 == null && ok == true){
			return true;
		}
	}
	p2 = p2.next;
}
return false;