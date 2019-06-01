const init = {
  btns: [],
  fields : [
    [1, 0, 1, 1],
    [0, 1, 1, 0, 1, 1, 0, 1]
  ]
};
const test = ({ btns, fields }) => {
  for(const cell of fields[0]) {
    if (cell !== 0) {
      return false;
    }
  }
  for(const cell of fields[1]) {
    if (cell !== 1) {
      return false;
    }
  }
  return true;
};


const fn = ({ btns, fields, fields_ }, id) => {
  if (id === 1) {
    fields[0][0] = fields_[1][0];
    fields[1][0] = fields_[0][0];
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
  fn, test, init
};