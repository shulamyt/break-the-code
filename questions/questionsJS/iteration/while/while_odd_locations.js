var array = new Co['a', 'b', 'c', 'e', 'f', 'g'];
print("1");
var i = 0;
while(true){
    print("2");
    if(i%2 == 0){
    	print(array[i]);
    }
    i++;
    if(i == array.length){
    	print("3");
    	break;
    }
}
print("4");