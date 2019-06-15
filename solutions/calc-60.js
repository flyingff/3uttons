(()=> {

const init = {
  btns: [],
  fields : [-4, 0, 4, 16, -21, 5]
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
      fields[2]--;
      fields[3] -= 2;
      fields[5]--;

      fields[0]++;
      fields[1]++;
      fields[4] += 2;
      break;
    case 1:
      fields[1] -= 3;

      fields[3]++;
      fields[4]++;
      fields[5]++;
      break;
    case 2:
      fields[0]--;
      fields[4]--;
      fields[1]++;
      fields[2]++;
      break;
  }

  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();