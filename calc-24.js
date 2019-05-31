const init = {
  btns: [0, 0, 0],
  fields : [[9,4,7],[8,1,6],[5,3,2]]
};

const test = ({ btns, fields }) => {
  return  fields[0][0] === 1 &&
    fields[0][1] === 2 &&
    fields[0][2] === 3 &&
    fields[1][0] === 4 &&
    fields[1][1] === 5 &&
    fields[1][2] === 6 &&
    fields[2][0] === 7 &&
    fields[2][1] === 8 &&
    fields[2][2] === 9;
};

const fn = ({ btns, fields }, id) => {
  if (id === 0) {
    const tmp = fields[0][0];
    fields[0][0] = fields[0][1];
    fields[0][1] = fields[0][2];
    fields[0][2] = fields[1][2];
    fields[1][2] = fields[2][2];
    fields[2][2] = fields[2][1];
    fields[2][1] = fields[2][0];
    fields[2][0] = fields[1][0];
    fields[1][0] = tmp;
  } else if (id === 2) {
    const tmp = fields[0][0];
    fields[0][0] = fields[1][0];
    fields[1][0] = fields[2][0];
    fields[2][0] = fields[2][1];
    fields[2][1] = fields[2][2];
    fields[2][2] = fields[1][2];
    fields[1][2] = fields[0][2];
    fields[0][2] = fields[0][1];
    fields[0][1] = tmp;
  } else if (id === 1) {
    const tmp1 = fields[0][0], tmp2 = fields[0][1], tmp3 = fields[0][2];
    fields[0][0] = fields[1][0];
    fields[0][1] = fields[1][1];
    fields[0][2] = fields[1][2];

    fields[1][0] = fields[2][0];
    fields[1][1] = fields[2][1];
    fields[1][2] = fields[2][2];

    fields[2][0] = tmp1;
    fields[2][1] = tmp2;
    fields[2][2] = tmp3;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};