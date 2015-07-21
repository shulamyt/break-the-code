function foo(){
    var array = [4, 2, 7];
    print(1);
    for(var n in array){
        print(2);
        if(n > 5){
            print(3);
            return;
            print(4);
        }
        print(5);
    }
    print(3);
}

foo();

//better

