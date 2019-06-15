(()=> {

const init = {
  btns: [0, 0, 0],
  fields : [8, 7, 3]
};

const test = ({ btns, fields }) => {
  return fields[0] === 2 &&
    fields[1] === 9 &&
    fields[2] === 7;
};

const fn = ({ btns, fields }, id) => {
  if (btns[id] !== 0 || Math.max(...btns) === 0) {
    // select mode
    btns[id]++;
  } else {
    // transfer mode
    const count = Math.max(...btns);
    let total = 0;
    // clear buttons
    for (let i = 0; i < 3; i++) {
      btns[i] = 0;
      // collect
      if (i !== id) {
        const n = Math.min(fields[i], count);
        fields[i] -= n;
        total += n;
      }
    }
    // receive
    fields[id] += total;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();