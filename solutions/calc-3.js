(()=> {

const init = {
  btns: [0, 0, 0],
  fields : [0, 0, 0]
};

const test = ({ btns, fields }) => {
  return fields[0] === 1 &&
    fields[1] === 1 &&
    fields[2] === 1;
};

const fn = ({ btns, fields }, id) => {
  if (id === 0) {
    fields[0] ^= 1;
    fields[1] ^= 1;
  } else if (id === 2) {
    fields[2] = 0;
  } else if (id === 1) {
    [fields[0], fields[2]] = [fields[2], fields[0]];
  }
  
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();