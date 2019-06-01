const init = {
  btns: [],
  fields : [
    [7, 8, 2, 5],
    [3, 6, 1, 4]
  ]
};
const test = ({ btns, fields }) => {
  return fields[0].join('') === '4321' &&
  fields[1].join('') === '8765';
};

const fn = ({ btns, fields, fields_ }, id) => {
  if (id === 0) {
    fields[0].unshift(fields[0].pop());
  } else if (id === 1) {
    fields[0][1] = fields_[1][1];
    fields[1][1] = fields_[0][1];

    fields[0][2] = fields_[1][2];
    fields[1][2] = fields_[0][2];
  } else if (id === 2) {
    fields[1].unshift(fields[1].pop());
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};