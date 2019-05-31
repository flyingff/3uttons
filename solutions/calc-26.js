let init = {
  btns: [11, 11, 11],
  fields : [
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1,  1, -1,  2],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1,  0, -1, -1, -1, -1]
  ]
};

const test = ({ btns, fields }) => {
  return  btns[0] === 0 &&
      btns[1] === 0 &&
      btns[2] === 0;
};
const N = 6;
const fn = ({ btns, fields }, id) => {
  const fields_ = JSON.parse(JSON.stringify(fields));
  // expand
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (fields_[i][j] === id) {
        for (const [dr, dc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
          const r = i + dr, c = j + dc;
          if (0 <= r && r < N && 0 <= c && c < N && fields[r][c] === -1) {
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