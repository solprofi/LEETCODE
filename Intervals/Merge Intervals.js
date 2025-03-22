/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
  intervals.sort((a,b) => a[0] - b[0]);

  let prevStart = intervals[0][0];
  let prevEnd = intervals[0][1];

  const result = [];

  for (const [currStart, currEnd] of intervals) {
    if (currStart > prevEnd) {
      result.push([prevStart, prevEnd]);
      prevStart = currStart;
      prevEnd = currEnd;
    } else {
      prevEnd = Math.max(prevEnd, currEnd);
    }
  }

  result.push([prevStart, prevEnd]);

  return result;
};

const merge2 = intervals => {
  intervals.sort((a,b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (const [currStart, currEnd] of intervals) {
    const prevEnd = result[result.length - 1][1];

    if (currStart > prevEnd) {
      result.push([currStart, currEnd]);
    } else {
      result[result.length - 1][1] = Math.max(prevEnd, currEnd);
    }
  }

  return result;
}