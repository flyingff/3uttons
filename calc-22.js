const init = {
  btns: [0, 0, 0],
  fields : [[3,2,1],[6,5,4]]
};

const test = ({ btns, fields }) => {
  return  fields[0][0] === 1 &&
    fields[0][1] === 2 &&
    fields[0][2] === 3 &&
    fields[1][0] === 4 &&
    fields[1][1] === 5 &&
    fields[1][2] === 6;
};

const fn = ({ btns, fields }, id) => {
  if (id === 0) {
    const tmp = fields[0][0];
    fields[0][0] = fields[0][1];
    fields[0][1] = fields[0][2];
    fields[0][2] = fields[1][2];
    fields[1][2] = fields[1][1];
    fields[1][1] = fields[1][0];
    fields[1][0] = tmp;
  } else if (id === 2) {
    const tmp = fields[0][0];
    fields[0][0] = fields[1][0];
    fields[1][0] = fields[1][1];
    fields[1][1] = fields[1][2];
    fields[1][2] = fields[0][2];
    fields[0][2] = fields[0][1];
    fields[0][1] = tmp;
  } else if (id === 1) {
    [fields[0][0], fields[1][0]] = [fields[1][0], fields[0][0]];
    [fields[0][1], fields[1][1]] = [fields[1][1], fields[0][1]];
    [fields[0][2], fields[1][2]] = [fields[1][2], fields[0][2]];
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};