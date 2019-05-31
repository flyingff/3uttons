const init = {
  btns: [0, 0, 0],
  fields : [0, 0, 1, 1, 1, 0, 0]
};

const test = ({ btns, fields }) => {
  return  fields[0] === 1 &&
    fields[1] === 0 &&
    fields[2] === 0 &&
    fields[3] === 1 &&
    fields[4] === 0 &&
    fields[5] === 1 &&
    fields[6] === 0;
};

const fn = ({ btns, fields }, id) => {
  if (id === 1) {
    // toggle
    btns[1] ^= 1;
  } else if (id === 0) {
    // move left
    const saved = fields[0];
    if (btns[1] === 1) {
      fields[0] = 0;
    }
    for(let i = 1; i < fields.length; i++) {
      if (fields[i] === 1 && fields[i - 1] === 0) {
        fields[i - 1] = 1;
        fields[i] = 0;
      }
    }
    if (btns[1] === 1) {
      fields[fields.length - 1] = saved;
    }
  } else if (id === 2) {
    // move right
    const saved = fields[fields.length - 1];
    if (btns[1] === 1) {
      fields[fields.length - 1] = 0;
    }
    for(let i = fields.length - 2; i >= 0; i--) {
      if (fields[i] === 1 && fields[i + 1] === 0) {
        fields[i + 1] = 1;
        fields[i] = 0;
      }
    }
    if (btns[1] === 1) {
      fields[0] = saved;
    }
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};