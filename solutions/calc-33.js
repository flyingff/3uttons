const init = {
  btns: [0],
  fields : [
    -1,  1,  1,  2, -1,
     2,  0, -1,  0,  0,
    -1,  2,  2,  0, -1,
    -1,  1,  1, -1,  2,
     0, -1,  0,  0, -1,
    -1,  0,  1,  0,  0,
     0,  0,  2,  1, -1,
  ]
};

const test = ({ btns, fields }) => {
  for(const cell of fields) {
    if (cell === -1) {
      return false;
    }
  }
  return true;
};

const LEN = [2, 3, 4];
const fn = ({ btns, fields }, id) => {
  const len = LEN[id], pos = btns[0];
  // check length
  if (pos + len > fields.length) {
    return { btns, fields };
  }
  // check color
  for (let i = 0; i < len; i++) {
    if (fields[i + pos] >= 0 && fields[i + pos] === id) {
      return { btns, fields };
    }
  }
  // draw
  for (let i = 0; i < len; i++) {
    fields[i + pos] = id;
  }
  btns[0] += len;
  return { btns, fields };
};

module.exports = {
  fn, test, init
};