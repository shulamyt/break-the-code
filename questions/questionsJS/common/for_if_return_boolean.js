function foo(){
    var array = [false, true, false];
    print(1);
    for(var b in array){
        print(2);
        if(b){
            print(3);
            return;
            print(4);
        }
        print(5);
    }
    print(6);
}

foo();

//not! [boolean, boolean, boolean]
