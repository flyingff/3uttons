(()=> {

const init = {
  btns: [0, 0, 0],
  fields : [1, 3, 7]
};

const test = ({ btns, fields }) => {
  return fields[0] === 0 &&
    fields[1] === 0 &&
    fields[2] === 0;
};

const fn = ({ btns, fields }, id) => {
  if (id === 0) {
    fields[0] = (fields[0] + 1) % 8;
    fields[1] = (fields[1] + (btns[1] * -2) + 9) % 8;
    fields[2] = (fields[2] + (btns[2] * -2) + 9) % 8;
  } else if (id === 1) {
    btns[1] ^= 1;
  } else if (id === 2) {
    btns[2] ^= 1;
  }
  
  return { btns, fields };
};

module.exports = {
  fn, test, init
};


})();