//do  realy need to go over the code to get the point?
//maybe add some twist?


var l1 = new List([0, 6, 9]);
var l2 = new List([4, 7, 11, 13]);

var p1 = l1.getFirstNode();
var p2 = l2.getFirstNode();

var h = new Node();
var p = h;

while(p1 != null && p2 != null){
  if(p1.getValue() <= p2.getValue()){
      p.setNext(p1);
      p1 = p1.getNext();
  }else{
      p.setNext(p2);
      p2.setNext(p2.getNext());
  }

  p = p.getNext();
}

if(p1 != null){
  p.setNext(p1);
}
    
if(p2 != null){
  p.setNext(p2);
}
    
print(h.getValue());
while(h.hasNext()){
  h = h.next();
  print(h.getValue());
}
