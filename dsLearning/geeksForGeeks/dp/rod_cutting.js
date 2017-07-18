
function max(a,b,c) {
    if(!c){
    return a>b?a:b;
    } else{
        if(a>b){
            if(a>c){
                return a;
            } else{
                return c;
            }
        } else{
            if(b>c){
                return b;
            } else{
                return c;
            }
        }
    }
}

function max_cutting_price (n,arr){
if(n===1){
    return arr[0];
    }
    if(n<=0){
        return 0; 
    }
    var max_val = 0;
    for(var i = 1;i<n;i++){
        
        max_val = max(max_val,arr[i] + max_cutting_price(n-i-1,arr));
    }

    return max_val;
}



var in_arr = [1, 5, 8, 9, 10, 17, 17, 20]; 
max_cutting_price(8,in_arr);