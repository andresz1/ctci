function quicksort(list) {
  if (!list.length) {
    return list;
  }

  const index = Math.floor(Math.random() * list.length);
  const pivot = list.splice(index, 1)[0];
  const left = list.filter(n => n < pivot);
  const right = list.filter(n => n >= pivot);

  return quicksort(left).concat([pivot]).concat(quicksort(right));
}

function mergesort(list) {
  function merge(left, right) {
    const sorted = [];
    let l = 0;
    let r = 0;

    while (true) {
      if (left[l] > right[r]) {
        sorted.push(right[r++]);
      } else {
        sorted.push(left[l++]);
      }

      if (l === left.length) {
        return sorted.concat(right.slice(r, right.length));
      }

      if (r === right.length) {
        return sorted.concat(left.slice(l, left.length));
      }
    }
  }
  
  if (list.length <= 1) {
    return list;
  }

  const index = Math.floor(list.length / 2);
  const left = list.slice(0, index);
  const right = list.slice(index, list.length);

  return merge(mergesort(left), mergesort(right));
}

function bubblesort(list) {
  let swapped;
  
  do {
    swapped = false;

    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
          var temp = list[i];

          list[i] = list[i + 1];
          list[i + 1] = temp;

          swapped = true;
      }
    }
  } while (swapped);

  return list;
}

module.exports = {
  quicksort: quicksort,
  mergesort: mergesort,
  bubblesort: bubblesort,
};