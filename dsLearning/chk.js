function add(){
    var sum = 0;
    for(var key in arguments){

        sum = sum + arguments[key];
    }
    return sum;
}
