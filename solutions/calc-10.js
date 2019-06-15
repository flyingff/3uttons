(()=> {

const init = {
  btns: [0, 0, 0],
  fields : [0, 0, 0, 0, 0]
};

const test = ({ btns, fields }) => {
  return fields[0] === 1 &&
    fields[1] === 1 &&
    fields[2] === 1 &&
    fields[3] === 1 &&
    fields[4] === 1;
};

const fn = ({ btns, fields }, id) => {
  if(id === 1) {
    fields[1] ^= 1;
    fields[2] ^= 1;
    fields[3] ^= 1;
  } else if (id === 2) {
    fields.unshift(fields.pop())
  } else if (id === 0) {
    fields.push(fields.shift())
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();