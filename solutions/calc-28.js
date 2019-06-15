(()=> {

const init = {
  btns: [2, 2],
  fields : [
    [ 0, -1, -1,  0, -1],
    [ 0, -1, -1, -1, -1],
    [-1, -1, -1, -1,  0],
    [ 0, -1, -1,  0, -1],
    [ 0, -1, -1, -1,  0],
  ]
};

const test = ({ btns, fields }) => {
  for (const row of fields) {
    for (const cell of row) {
      if (cell !== -1) {
        return false;
      }
    }
  }
  return true;
};
const fn = ({ btns, fields }, id) => {
  if (id === 0) {
    const r = btns[0];
    let c0 = null;
    for (let c = btns[1] - 1; c >= 0; c--) {
      if (fields[r][c] !== -1) {
        c0 = c;
      }
    }
    if (c0 !== null) {
      fields[r][c0] = -1;
      btns[1] = c0;
    }
  } else if (id === 2) {
    const r = btns[0];
    let c0 = null;
    for (let c = btns[1] + 1; c < 5; c++) {
      if (fields[r][c] !== -1) {
        c0 = c;
      }
    }
    if (c0 !== null) {
      fields[r][c0] = -1;
      btns[1] = c0;
    }
  } else if (id === 1) {
    const c = btns[1];
    let r0 = null;
    for (let r = btns[0] - 1; r >= 0; r--) {
      if (fields[r][c] !== -1) {
        r0 = r;
      }
    }
    if (r0 !== null) {
      fields[r0][c] = -1;
      btns[0] = r0;
    } else {
      for (let r = btns[0] + 1; r < 5; r++) {
        if (fields[r][c] !== -1) {
          r0 = r;
        }
      }
      if (r0 !== null) {
        fields[r0][c] = -1;
        btns[0] = r0;
      }
    }
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();