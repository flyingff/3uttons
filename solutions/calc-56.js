(()=> {

const init = {
  btns: [],
  fields : [
    [2, 1, 2, 2],
    [1, 0, 1, 1, 2, 2, 1, 2],
    [0, 2, 2, 2, 2, 1, 2, 0, 1, 2, 0, 1]
  ]
};
const test = ({ btns, fields }) => {
  for(let i = 0; i < fields.length; i++) {
    for(const cell of fields[i]) {
      if (cell !== i) {
        return false;
      }
    }
  }
  return true;
};
const matches = (fields) => {
  let cnt = 0;
  for(let i = 0; i < fields.length; i++) {
    for(const cell of fields[i]) {
      if (cell === i) {
        cnt++;
      }
    }
  }
  return cnt;
};

const fn = ({ btns, fields, fields_ }, id) => {
  if (id === 1) {
    fields[0][0] = fields_[2][0];
    fields[1][0] = fields_[0][0];
    fields[2][0] = fields_[1][0];
  } else if (id === 0) {
    fields.forEach(row => {
      row.unshift(row.pop());
    });
  } else if (id === 2) {
    fields.forEach(row => {
      row.push(row.shift());
    });
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init, max:26,
  cmp : (x, y) => {
    if (!x.matches) {
      x.matches = matches(x.fields) * 1 - x.path.length;
    }
    if (!y.matches) {
      y.matches = matches(y.fields) * 1 - y.path.length;
    }
    return x.matches > y.matches;
  }
};

})();