(()=> {

const init = {
  btns: [],
  fields : [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
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
    const v = fields[0][0];
    fields[0][0] = fields[1][0];
    fields[1][0] = fields[2][0];
    fields[2][0] = v;
  } else if (id === 1) {
    fields[0][1] = fields_[1][0];
    fields[1][0] = fields_[0][1];

    fields[2][0] = fields_[1][1];
    fields[1][1] = fields_[0][2];
    fields[0][2] = fields_[2][0];

    fields[2][1] = fields_[1][2];
    fields[1][2] = fields_[2][1];
  } else if (id === 2) {
    fields[2][0] ^= 1;
    fields[2][1] ^= 1;
    fields[2][2] ^= 1;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();