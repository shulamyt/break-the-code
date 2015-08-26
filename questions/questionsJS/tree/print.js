				3
		2				6
	13		7		8		4

var r = t.root;
p(r);

function f(n){
	print(n.value);
	f(n.left);
	f(n.right);
}