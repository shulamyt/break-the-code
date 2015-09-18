				3
		2				6
	13		7		8		4

var r = t.root;
f(r, 8);

function f(n, v){
	if(n == null){
		return false;
	}
	if(n.value == v){
		return true;
	}
	f(n.left , v);
	f(n.right, v);
}