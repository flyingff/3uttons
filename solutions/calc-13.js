(()=> {

const test = ({ btns, fields }) => {
  return fields[0] === 0 &&
    fields[1] === 0 &&
    fields[2] === 1 &&
    fields[3] === 0 &&
    fields[4] === 1 &&
    fields[5] === 0 &&
    fields[6] === 0;
};

const fn = ({ btns, fields }, id) => {
  if (id === 1) {
    fields[3] ^= 1;
  } else if (id === 0) {
    // move left
    for(let i = 1; i < fields.length; i++) {
      if (fields[i] === 1 && fields[i - 1] === 0) {
        fields[i - 1] = 1;
        fields[i] = 0;
      }
    }
  } else if (id === 2) {
    // move right
    for(let i = fields.length - 2; i >= 0; i--) {
      if (fields[i] === 1 && fields[i + 1] === 0) {
        fields[i + 1] = 1;
        fields[i] = 0;
      }
    }
  }
  return { btns, fields };
};

let init = {
  btns: [0, 0, 0],
  fields : [0, 1, 0, 1, 0, 1, 0]
};

module.exports = {
  fn, test, init
};

})();