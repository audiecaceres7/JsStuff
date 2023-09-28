function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}

const array: number[] = [];
while (array.length != 20) {
  const random = Math.floor(Math.random() * 20) + 1;
  if (!array.includes(random)) {
    array.push(random);
  }
}

console.log(array);
quick_sort(array);
console.log(array);
