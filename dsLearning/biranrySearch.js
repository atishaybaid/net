function binarySeach(arr, left, right, seachNumber) {
    var midIndex = left + parseInt((right - left) / 2);
    if (arr[midIndex] == seachNumber) {
        console.log(midIndex);
        return midIndex;
    } else {
        if (arr[midIndex] > seachNumber) {
            right = midIndex - 1;
            binarySeach(arr, left, right, seachNumber);
        } else {
            left = midIndex + 1;
            binarySeach(arr, left, right, seachNumber);
        }
    }
}







//Driver programme

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var seachNumber = 8;


var left = 0;
var right = arr.length - 1;

var searchIndex = binarySeach(arr, left, right, seachNumber);

