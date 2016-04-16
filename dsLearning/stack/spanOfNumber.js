function Stack(){
 this.arr = [];
 this.top = -1;
};

Stack.prototype.add = function(num){
this.arr.push(num);
this.top++;
};


Stack.prototype.remove = function(){
    this.arr.pop();
    this.top--;
}


//driver programmme

var inputNumbers = [5,10,7,12,6,5,9,2,5];
var stack = new Stack();


for(var i = 0;i<=inputNumbers.length;i++){
     stack.add(inputNumbers[i]);

    if(inputNumbers[i]<stack.arr(stack.top)){
        console.log("span of" + inputNumbers[i] +"is zero" );
    } else{
        while(inputNumbers[i]>stack.arr(stack.top){
            stack.remove();
        })
    }
}


