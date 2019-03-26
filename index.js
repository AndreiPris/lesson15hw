function getDiscriminant(a, b, c) {
  return b * b - 4 * a * c;

}

function getRoots(a, b, c) {
  var discriminant = getDiscriminant(a, b, c);

  if (discriminant < 0) {
    return { msg: 'no real roots' };
  } else if (discriminant === 0) {
    var x = (-b / 2) * a;
    return { x1: x, x2: x };
  }
  return{
    x1: (-b + Math.sqrt(discriminant)) / 2 * a,
    x2: (-b - Math.sqrt(discriminant)) / 2 * a,
 }
}


module.exports = {
  getDiscriminant,
  getRoots,
};
