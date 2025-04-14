const mergeSortedLists = (arr, start, mid, end) => {
  let left = start;
  let right = mid + 1;

  const sorted = [];

  while (left <= mid && right <= end) {
    if (arr[left] <= arr[right]) {
      sorted.push(arr[left]);
      left++;
    } else {
      sorted.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
      sorted.push(arr[left]);
      left++;
  }

  while (right <= end) {
    sorted.push(arr[right]);
    right++;
  }

  for (let i = start; i <= end; i++) {
    arr[i] = sorted[i - start];
  }
}

// merge sort recursively divides array (using indexes instead of copies)
// when a base case is hit, it merges two sorted lists and goes
// up the recursion stack
const mergeSort = (arr, start, end) => {
  if (start === end) {
    return;
  }

  const mid = start + Math.floor((end - start) / 2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);

  mergeSortedLists(arr, start, mid, end);
}