(()=> {

const init = {
  btns: [0, 0],
  fields : [
    [2, 7, 4],
    [8, 5, 3],
    [6, 9, 1]
  ]
};

const matches = (fields) => {
  return (fields[0][0] === 3 ? 1 : 0) +
    (fields[0][1] === 2 ? 1 : 0) +
    (fields[0][2] === 1 ? 1 : 0) +
    (fields[1][0] === 6 ? 1 : 0) +
    (fields[1][1] === 5 ? 1 : 0) +
    (fields[1][2] === 4 ? 1 : 0) +
    (fields[2][0] === 9 ? 1 : 0) +
    (fields[2][1] === 8 ? 1 : 0) +
    (fields[2][2] === 7 ? 1 : 0);
}
const test = ({ btns, fields }) => {
  return fields[0][0] === 3 &&
    fields[0][1] === 2 &&
    fields[0][2] === 1 &&
    fields[1][0] === 6 &&
    fields[1][1] === 5 &&
    fields[1][2] === 4 &&
    fields[2][0] === 9 &&
    fields[2][1] === 8 &&
    fields[2][2] === 7;
};

const within = (v, max, min) => min <= v && v <= max;
const fn = ({ btns, fields, fields_ }, id) => {
  if (btns[1] === 0 || btns[0] === id) {
    if (btns[1] + 1 <= fields[id].length) {
      btns[0] = id;
      btns[1]++;
    }
  } else {
    const stack = [];
    const src = btns[0], target = id, count = btns[1];
    for (let i = 0; i < btns[1]; i++) {
      stack.unshift(fields[src].pop());
    }
    for (const n of stack) {
      fields[target].push(n);
    }
    switch (target) {
      case 0:
        if (fields[0].length > 4 || 
          (fields[0].length === 4 && !within(fields[0][3], 3, 1))) {
          return { btns, fields : fields_};
        }
        break;
      case 1:
        if (fields[1].length > 6 || 
          (fields[1].length === 6 && !within(fields[1][5], 9, 7)) ||
          (fields[1].length >= 4 && !within(fields[1][3], 6, 4))) {
          return { btns, fields : fields_};
        }
        break;
      case 2:
        if (fields[2].length > 5 ||
         (fields[2].length === 5 && !within(fields[2][4], 3, 1))) {
          return { btns, fields : fields_};
        }
        break;
    }

    btns[0] = 0;
    btns[1] = 0;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init, max: 40, 
  cmp: (x, y) => {
    if (!x.matches) {
      x.matches = matches(x.fields) * 2 - x.path.length;
    }
    if (!y.matches) {
      y.matches = matches(y.fields) * 2 - y.path.length;
    }
    return x.matches > y.matches;
  }
};

})();