var array = ["x", "b", "r", "p", "r"];
var length = array.length;
var val = "r";
for (i = length - 1; i >= 0; i -= 1) {
    if (array[i] == val)) {
        return i;
    }
}
return -1;