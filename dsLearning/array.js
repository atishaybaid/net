Array.prototype.unique = function(){
    var uniqueArray = [];
    var obj = {};
    for(val in this){
       obj[val] = "test";
    };

    for(key in obj){
      uniqueArray.push(key)
    }

    return uniqueArray;
}

[1, 2, 3, 1, 2, 3].unique();