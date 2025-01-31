/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// Naive solution TC: O((m+n)*log(m+n)) SC: O(m+n)
const merge = (nums1, m, nums2, n) => {
  //   add nums2 elements to the end of nums1
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }

  //   sort nums1
  nums1.sort((a, b) => a - b);
};

// Copy first array and use 3 pointers. TC: O(m+n), SC: O(m)
const merge2 = (nums1, m, nums2, n) => {
  const nums1Copy = nums1.slice();
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1++];
    } else {
      nums1[i] = nums2[p2++];
    }
  }
}

// Add elements from the back TC: O(m+n), SC: O(1)
const merge3 = (nums1, m, nums2, n) => {
  let r1 = m - 1;
  let r2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (r1 >= 0 && r2 >= 0) {
      nums1[i] = nums1[r1] > nums2[r2] ? nums1[r1--] : nums2[r2--];
    } else if (r1 >= 0) {
      nums1[i] = nums1[r1];
    } else {
      nums1[i] = nums2[r2];
    }
  }
}