(()=> {

const init = {
  btns: [3, 3, 1],
  fields : [
    [-1, -1, -1,  1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1,  0],
    [-1, -1, -1,  0, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1],
    [ 0, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1,  2, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1]
  ]
};

const test = ({ btns, fields }) => {
  for(const row of fields) {
    for (const cell of row) {
      if (cell === 0) {
        return false;
      }
    }
  }
  return true;
};
const N = 7;
const fn = ({ btns, fields }, id) => {
  if (id === 0) {
    btns[2] = (btns[2] + 2) % 3;
  } else if (id === 2) {
    btns[2] = (btns[2] + 1) % 3;
  } else {
    const o = [2 + btns[2], 3];
    const dx = btns[0] - o[0], dy = btns[1] - o[1];
    const x = btns[0] = o[0] - dy;
    const y = btns[1] = o[1] + dx;
    if (0 <= x && x < N && 0 <= y && y < N) {
      const v = fields[y][x];
      if (v === 0) {
        fields[y][x] = -1;
      } else if (v === 1) {
        btns[1]++;
      } else if (v === 2) {
        btns[1]--;
      }
    }
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();