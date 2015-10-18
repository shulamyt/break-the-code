var arr = [6, 5, 7, 5, 3, 4, 3, 5, 1];
var c = 1;
var temp = 0;
var tempCount;
var p;

for (var i = 0; i < arr.length; i++){
    temp = arr[i];
    tempCount = 0;
    for (var j = 1; j < arr.length; j++){
        if (temp == arr[j]){
            tempCount++;
        }
    }
    if (tempCount > count){
      p = temp;
      count = tempCount;
    }
}
print(p);