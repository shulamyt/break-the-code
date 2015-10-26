var array = ["x", "b", "r", "p", "r"];
//add  -- a, b / k, l / n, m? not i,j
var i = 1;
var j = 2;
if (i < 0 || i >= array.length || j < 0
	|| j >= array.length) {
	return false;
}
var temp = array[i];
array[i] = array[j];
array[j] = temp;

print (array);