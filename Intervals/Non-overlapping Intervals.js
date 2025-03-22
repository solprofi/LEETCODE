/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = intervals => {
  intervals.sort((a,b) => a[0] - b[0]);

  let intervalsToRemove = 0;
  let prevEnd = intervals[0][1];

  for (const [currStart, currEnd] of intervals.slice(1)) {
    if (currStart >= prevEnd) {
      prevEnd = currEnd;
    } else {
      intervalsToRemove++;
      prevEnd = Math.min(prevEnd, currEnd);
    }
  }

  return intervalsToRemove;
}