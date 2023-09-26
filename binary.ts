const names = [1, 2, 3, 4, 5, 6, 7, 8];

function BinarySearch(array: number[], item: number) {
  let hi = array.length;
  let lo = 0;

  do {
    let m = Math.floor(lo + (hi - lo) / 2);
    const value = array[m];

    if (value === item) {
      return true;
    } else if (item < value) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return false;
}

console.log(BinarySearch(names, 7));
