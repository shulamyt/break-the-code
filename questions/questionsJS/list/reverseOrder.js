var l = new List([4, 7, 11, 13]);
 
Node a = l.getHead();
Node b = a.getNext();

while (b != null) {
	Node t = b.getNext();
	b.setNext(a);
	a = b;
	b = t;
}

a.setNext(null);

print(a.getValue());
while(a.hasNext()){
  a = a.next();
  print(a.getValue());
}
