exports.min = function min (array) {
  let mini = 0;
  if (array && array.length > 0) {
    mini = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < mini) {
        mini = array[i];
      }
    }
  }
  return mini;
}

exports.max = function max (array) {
  let max = 0;
  if (array && array.length > 0) {
   max = array[0];
  for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
  }

  return max;
}

exports.avg = function avg (array) {
  let sum = 0;
  let avg = 0;
  if (array && array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    avg = sum / array.length;
  }
  return avg;
}
