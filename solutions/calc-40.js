const init = {
  btns: [],
  fields : [
    [0, 0, 0],
    [1, 1, 1],
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

const fn = ({ btns, fields }, id) => {
  if (id === 0) {
    fields.forEach(it => {
      it.unshift(it.pop());
    });
  } else if (id === 1) {
    fields[1][0] ^= 1;
    fields[1][2] ^= 1;
    fields[2][1] ^= 1;
  } else if (id === 2) {
    const [t0, t1, t2] = [fields[0][0],fields[0][1],fields[0][2]];
    fields[0][0] = fields[1][0];
    fields[0][1] = fields[1][1];
    fields[0][2] = fields[1][2];
    fields[1][0] = fields[2][0];
    fields[1][1] = fields[2][1];
    fields[1][2] = fields[2][2];
    fields[2][0] = t0;
    fields[2][1] = t1;
    fields[2][2] = t2;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};