(()=> {

const init = {
  btns: [],
  fields : [
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 1, 0]
  ]
};

const test = ({ btns, fields }) => {
  return fields.map(it => {
    return it.reduce((x, y) => x === y ? x : -1) >= 0;
  }).reduce((x, y) => x && y);
};

const fn = ({ btns, fields }, id) => {
  if (id === 0) {
    fields[0].unshift(fields[0].pop());
  } else if (id === 1) {
    [fields[0][2], fields[1][2]] = [fields[1][2], fields[0][2]]; 
    [fields[0][3], fields[1][3]] = [fields[1][3], fields[0][3]];
    [fields[0][4], fields[1][4]] = [fields[1][4], fields[0][4]];
  } else if (id === 2) {
    fields[1].unshift(fields[1].pop());
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();