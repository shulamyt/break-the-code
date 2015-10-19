var l1 = new List(["x", "b", "k", "p", "r"]);
var l2 = new List(["x", "b", "r", "p", "r"]);

if (l1.length !== l2.length) {
    return false;
}
for (i = 0; i < l1.length; i += 1) {
    if (l1[i] != l2[i])) {
        return false;
    }
}
return true;