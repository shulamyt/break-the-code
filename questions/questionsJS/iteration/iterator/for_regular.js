var array = ['a', 'b', 'c'];
var iterator = makeIterator(array);
print(1);
while(iterator.hasNext()){
    print(2);
    print(iterator.next().value);
}
print(3);