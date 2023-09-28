function qs(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    var pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}
function partition(arr, lo, hi) {
    var pivot = arr[hi];
    var idx = lo - 1;
    for (var i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            var tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}
function quick_sort(arr) {
    qs(arr, 0, arr.length - 1);
}
var array = [];
while (array.length != 20) {
    var random = Math.floor(Math.random() * 20) + 1;
    if (!array.includes(random)) {
        array.push(random);
    }
}
console.log(array);
quick_sort(array);
console.log(array);
