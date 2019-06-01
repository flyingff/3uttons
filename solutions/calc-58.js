const init = {
  btns: [],
  fields : [3, -5, 2]
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
  const src = id, dst = (id + 1) % 3;
  fields[src]--;
  fields[dst]++;

  return { btns, fields };
};

module.exports = {
  fn, test, init
};