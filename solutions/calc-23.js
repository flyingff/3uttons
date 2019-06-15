(()=> {

const init = {
  btns: [0, 0, 0],
  fields : [[2,6],[1,4],[5,3]]
};

const test = ({ btns, fields }) => {
  return  fields[0][0] === 1 &&
    fields[0][1] === 2 &&
    fields[1][0] === 3 &&
    fields[1][1] === 4 &&
    fields[2][0] === 5 &&
    fields[2][1] === 6;
};

const fn = ({ btns, fields }, id) => {
  if (id === 0) {
    const tmp = fields[0][0];
    fields[0][0] = fields[0][1];
    fields[0][1] = fields[1][1];
    fields[1][1] = fields[2][1];
    fields[2][1] = fields[2][0];
    fields[2][0] = fields[1][0];
    fields[1][0] = tmp;
  } else if (id === 2) {
    const tmp = fields[0][0];
    fields[0][0] = fields[1][0];
    fields[1][0] = fields[2][0];
    fields[2][0] = fields[2][1];
    fields[2][1] = fields[1][1];
    fields[1][1] = fields[0][1];
    fields[0][1] = tmp;
  } else if (id === 1) {
    const tmp1 = fields[0][0], tmp2 = fields[0][1];
    fields[0][0] = fields[1][0];
    fields[0][1] = fields[1][1];
    fields[1][0] = fields[2][0];
    fields[1][1] = fields[2][1];
    fields[2][0] = tmp1;
    fields[2][1] = tmp2;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();