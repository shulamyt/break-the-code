var l1 = new List(["x", "b", "k", "p", "r"]);
var l2 = new List(["x", "b", "r", "p", "r"]);

if (array1.length !== array2.length) {
    return false;
}
for (i = 0; i < array1.length; i += 1) {
    if (array1[i] != array2[i])) {
        return false;
    }
}
return true;