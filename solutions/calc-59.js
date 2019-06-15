(()=> {

const init = {
  btns: [],
  fields : [2, 3, 1, -6]
};
const test = ({ btns, fields }) => {
  for (const n of fields) {
    if (n !== 0) {
      return false;
    }
  }
  return true;
};

const fn = ({ btns, fields, fields_ }, id) => {
  switch(id) {
    case 0:
      fields[0]--;
      fields[2]--;
      fields[1]++;
      fields[3]++;
      break;
    case 1:
      fields[1] -= 2;
      fields[2]++;
      fields[3]++;
      break;
    case 2:
      fields[3]--;
      fields[0]++;
      break;
  }

  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();