function zero(fn) {
  return typeof fn == "function" ? fn(0) : 0;
}
function one(fn) {
  return typeof fn == "function" ? fn(1) : 1;
}
function two(fn) {
  return typeof fn == "function" ? fn(2) : 2;
}
function three(fn) {
  return typeof fn == "function" ? fn(3) : 3;
}
function four(fn) {
  return typeof fn == "function" ? fn(4) : 4;
}
function five(fn) {
  return typeof fn == "function" ? fn(5) : 5;
}
function six(fn) {
  return typeof fn == "function" ? fn(6) : 6;
}
function seven(fn) {
  return typeof fn == "function" ? fn(7) : 7;
}
function eight(fn) {
  return typeof fn == "function" ? fn(8) : 8;
}
function nine(fn) {
  return typeof fn == "function" ? fn(9) : 9;
}

function plus(x) {
  return function plus(y) {
    return x + y;
  };
}
function minus(x) {
  return function minus(y) {
    return y - x;
  };
}
function times(x) {
  return function times(y) {
    return x * y;
  };
}
function dividedBy(x) {
  return function dividedBy(y) {
    return Math.floor(y / x);
  };
}