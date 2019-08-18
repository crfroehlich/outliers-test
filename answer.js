function findOutlier(points) {
  const slopes = calculateSlopes(points);
  for (let i = 0, length = slopes.length; i < length; i++) {
    const indexCurrent = i;
    const indexPrevious = i == 0 ? length - 1 : i - 1;
    const indexNext = (i + 1) % length;

    const slopeCurrent = slopes[indexCurrent];
    const slopePrevious = slopes[indexPrevious];
    const slopeNext = slopes[indexNext];

    if (slopeCurrent !== slopePrevious && slopeCurrent !== slopeNext) {
      return points[indexCurrent + 1];
    }
  }
}

function calculateSlopes(points) {
  const slopes = [];
  for (let i = 0, length = points.length; i < length; i++) {
    const p1 = points[i];
    const p2 = points[(i + 1) % length];
    const slope = (p2.y - p1.y) / (p2.x - p1.x);
    const roundedSlope = parseFloat(slope.toFixed(9));
    slopes.push(roundedSlope);
  }
  return slopes;
}

// call this to execute the test with console.log statements running
testPoints()


// do not alter the code below this point
function createPoints(randomizedIndex) {
  var startY = Math.random() * 100;
  var slope = Math.random();
  var points = [];
  for (var i = 0; i < 10; i++) {
    var x = Math.random() * 100;
    points.push({x: x, y: x * slope + startY});
  }
  var outlier = points[randomizedIndex];
  outlier.y += Math.random() > 0.5 ? 10 : -10;
  return points;
}
function testPoints() {
  var outlierIndex = Math.floor(Math.random() * 10);
  var points = createPoints(outlierIndex);
  return findOutlier(points) === points[outlierIndex];
}
