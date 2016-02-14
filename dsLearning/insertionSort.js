function insertionSort(arr) {
    var i,j,temp;
    for(j=1;j<arr.length+1;j++){
        for(i = j;i>=0;i--){
            if(arr[i]<arr[i-1]){
                temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
            }
        }
    }



}







//Driver programme
var arr = [
    12, 11, 13, 5, 6
];
insertionSort(arr);
console.log(arr);
