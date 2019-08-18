function findOutlier(points) {
  for (var attemptedIndex = 0; attemptedIndex < 10; attemptedIndex++) {
    var first = points[attemptedIndex];
    var second = points[attemptedIndex + 1];
    var slope = (second.y - first.y) / (second.x - first.x)
    var startY = (first.y - first.x * slope);
    var outlier = findOutlierWithLine(startY, slope);
    if (outlier) {
      return outlier;
    }
  }
  function findOutlierWithLine(startY, slope) {
    var outliers = [];
    for (var i = 0; i < points.length; i++) {
      var point = points[i];
      if (Math.abs(point.y - (point.x * slope + startY)) > 1) {
        outliers.push(point);
      }
    }
    if (outliers.length === 1) {
      return outliers[0];
    }
  }

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
