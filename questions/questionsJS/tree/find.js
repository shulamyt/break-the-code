				3
		2				6
	13		7		8		4

var r = t.root;
find(r, 8);

function f(n, v){
	if(n == null){
		return;
	}
	if(n.value == v){
		return n;
	}
	f(n.left , v);
	f(n.right, v);
}