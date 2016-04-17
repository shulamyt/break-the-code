var array = ['a', 'b', 'c', 'e', 'f', 'g'];
print("1");
for(var i = 0; i < array.length; i++){
    if(array[i] == 'c'){
    	break;
    }
    print(array[i]);
}
print("4");