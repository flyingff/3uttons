(()=> {

const init = {
  btns: [0, 0, 0],
  fields : [2, 4, 12]
};

const test = ({ btns, fields }) => {
  return fields[0] === 6 &&
    fields[1] === 6 &&
    fields[2] === 6;
};

const fn = ({ btns, fields }, id) => {
  if (btns[id] !== 0 || Math.max(...btns) === 0) {
    // select mode
    btns[id]++;
  } else {
    // transfer mode
    for (let i = 0; i < 3; i++) {
      if (btns[i] != 0) {
        const count = Math.min(btns[i], fields[i]);
        fields[id] += count;
        fields[i] -= count;
        btns[i] = 0;
      }
    }    
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};


})();