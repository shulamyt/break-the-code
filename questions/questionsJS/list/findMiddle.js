var l1 = new List(["y", "d", "h", "a", "w", "s"]);
var p1 = l1.head();

var c = 0;

while (p1.next){
	c = c + 1;
	p1 = p1.next;
}

var i = 0;
var  p = l1.head();
while (i < c/2){
	p = p.next;
	i = i + 1;
}

print (p.value);