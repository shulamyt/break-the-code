var array = ['a', 'b', 'c'];
//generic!!
var c = new Continer(['a', 'b', 'c']);
c.iter();
var iterator = new Itrerator(array);//array.iterator();
print("1");
while(iterator.hasNext()){
    print("2");
    print(iterator.next().value);
    //print(iterator.next()); -- pointer???
}
print("3");