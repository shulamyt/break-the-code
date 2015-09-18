				3
		2				6
	13		7		8		4

var r = t.root;
p(r);

function p(n){
	print(n.value);
	p(n.left);
	p(n.right);
}