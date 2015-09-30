var a = [1, 3, 4, 6, 4, 3, 1];

for (var i = 0; i < a.length; i++) {
    if (a[i] !== a[a.length - i  - 1]) {
        return false;
    }
}
return true;