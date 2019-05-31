const init = {
  btns: [],
  fields : [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
};

const test = ({ btns, fields }) => {
  for(const row of fields) {
    for (const cell of row) {
      if (cell === 0) {
        return false;
      }
    }
  }
  return true;
};

const fn = ({ btns, fields, fields_ }, id) => {
  if (id === 0) {
    fields[0].unshift(fields[0].pop());
    fields[1].unshift(fields[1].pop());
  } else if (id === 1) {
    fields[0][0] ^= 1;
    fields[1][1] ^= 1;
    fields[2][2] ^= 1;
  } else if (id === 2) {
    const v = fields[0][0];
    fields[0][0] = fields[2][0];
    fields[2][0] = fields[1][0];
    fields[1][0] = v;

    const v2 = fields[0][1];
    fields[0][1] = fields[2][1];
    fields[2][1] = fields[1][1];
    fields[1][1] = v2;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};