function findOutlier(points) {
  return points[0] // need to figure out which point is really the outlier
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
