(()=> {

const init = {
  btns: [0, 0],
  fields : [
    [2, 7, 4],
    [6, 9, 3],
    [8, 5, 1]
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
    if (id !== 1 && fields[id].length > 5) {
      return { btns, fields : fields_};
    } else if (id === 1 && fields[1].length > 3) {
      if (fields[1].length > 6) {
        return { btns, fields : fields_};
      }
      for (let i = 3; i < fields[1].length; i++) {
        const v = fields[1][i];
        if (!(4 <= v && v <= 6)) {
          return { btns, fields : fields_};
        }
      }
    }
    btns[0] = 0;
    btns[1] = 0;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init, max: 36, 
  cmp: (x, y) => {
    if (!x.matches) {
      x.matches = matches(x.fields) * 2 - x.path.length;
    }
    if (!y.matches) {
      y.matches = matches(y.fields) * 2 - y.path.length;
    }
    return x.matches > y.matches;
  },
  /*ops_: [
    1, 2, 2,    1, 2, 2,    0, 1, 1, 2,
    0, 2, 0,    1, 0, 1,    0, 1, 0, 1,
    2, 2, 2,    0, 0, 2,    1, 0, 2, 1,
    0, 0, 2,    1, 1, 0 
  ],
  */
};

})();