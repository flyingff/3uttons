(()=> {

const init = {
  btns: [4, 11, 7],
  fields : [
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1,  1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1,  0, -1, -1,  2]
  ]
};

const test = ({ btns, fields }) => {
  return  btns[0] === 0 &&
    btns[1] === 0 &&
    btns[2] === 0;
};

const fn = ({ btns, fields }, id) => {
  const fields_ = JSON.parse(JSON.stringify(fields));
  // expand
  let count = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (fields_[i][j] === id) {
        for (const [dr, dc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
          const r = i + dr, c = j + dc;
          if (0 <= r && r < 5 && 0 <= c && c < 5 && fields[r][c] === -1) {
            fields[r][c] = id;
            count++;
          }
        }
      }
    }
  }
  btns[id] -= count;
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();