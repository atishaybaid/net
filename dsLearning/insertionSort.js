function insertionSort(arr) {
    for (i = 1; i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;

        while (arr[j] > key && j >= 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

}







//Driver programme
var arr = [
    12, 11, 13, 5, 6
];
insertionSort(arr);
console.log(arr);
