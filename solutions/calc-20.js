const init = {
  btns: [2, 0, 0],
  fields : [2,5,4,6,1,3,]
};

const test = ({ btns, fields }) => {
  return  fields[0] === 1 &&
    fields[1] === 2 &&
    fields[2] === 3 &&
    fields[3] === 4 &&
    fields[4] === 5 &&
    fields[5] === 6;
};

const fn = ({ btns, fields }, id) => {
  if (id === 0 && btns[0] > 0) {
    const p = btns[0];
    if(btns[1] === 1) {
      const tmp = fields[p - 1];
      fields[p - 1] = fields[p];
      fields[p] = fields[p + 1];
      fields[p + 1] = tmp;
    }
    btns[0] = Math.max(p - 1, 0);
  } else if (id === 2 && btns[0] < 4) {
    const p = btns[0];
    if(btns[1] === 1) {
      const tmp = fields[p + 2];
      fields[p + 2] = fields[p + 1];
      fields[p + 1] = fields[p];
      fields[p] = tmp;
    }
    btns[0] = Math.min(p + 1, 5);
  } else if (id === 1) {
    btns[1] ^= 1;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};