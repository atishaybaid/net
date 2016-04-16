function Stack(){
    this.arr =[];
    this.top = -1;
}

Stack.prototype.add = function(num){
    this.arr.push(num);
    this.top++;
    console.log(this.arr);
};

Stack.prototype.remove = function(){
    this.arr.pop();
    this.top--;
    console.log(this.arr);
};

Stack.prototype.size = function(){
    console.log(this.top+1);
    return this.top+1;
};


//driver programe
var stack1  = new Stack();
stack1.add(10);
stack1.add(20);
stack1.add(30);


stack1.remove();
stack1.size();