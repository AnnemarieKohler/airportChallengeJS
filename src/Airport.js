function Airport() {
  hanger = new Array();
}

Airport.prototype.land = function(plane) {
  hanger.push(plane);
}

Airport.prototype.planes = function() {
  return hanger;
}

Airport.prototype.takeOff = function(plane) {
  hanger.splice((hanger.indexOf(plane)),1);
}
