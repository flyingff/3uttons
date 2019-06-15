(()=> {

const init = {
  btns: [0, 0, 0],
  fields : [5, 5, 5]
};

const test = ({ btns, fields }) => {
  return  fields[0] === 0 &&
    fields[1] === 0 &&
    fields[2] === 0;
};

const fn = ({ btns, fields }, id) => {
  if (id === 0) {
    fields[0] = (fields[0] + 1) % 10;
    fields[1] = (fields[1] + 1) % 10;
  } else if (id === 2) {
    fields[2] = (fields[2] + 9) % 10;
    fields[1] = (fields[1] + 9) % 10;
  } else if (id === 1) {
    fields[1] = 9 - fields[1];
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();