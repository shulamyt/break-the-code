

var current = head;
int length = 0;
var middle = head;
while(current.next() != null){
  length++;
  if(length%2 ==0){
    middle = middle.next();
  }
  current = current.next();
}
if(length%2 == 1){
  middle = middle.next();
}
return middle;
