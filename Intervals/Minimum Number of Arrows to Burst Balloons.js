/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = points => {
  if (!points.length) {
    return 0;
  }

  points.sort((a,b) => a[1] - b[1]);

  let arrowCount = 1;
  let prevIntervalEnd = points[0][1];

  for (const [currIntervalStart, currIntervalEnd] of points) {
    if (currIntervalStart > prevIntervalEnd) {
      arrowCount++;
      prevIntervalEnd = currIntervalEnd;
    }
  }

  return arrowCount;
}