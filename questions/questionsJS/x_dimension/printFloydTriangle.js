var rows = 3;
var number = 1; 
for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
        print(number + " ");
        number++;
    }
    print("\n"); //new line
}
