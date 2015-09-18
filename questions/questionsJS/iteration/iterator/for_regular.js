var continer = new Continer(['a', 'b', 'c']);
var iterator = continer.iterator();
print("1");
while(iterator.hasNext()){
    print("2");
    print(iterator.next().getValue());
}
print("3");