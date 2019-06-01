const init = {
  btns: [],
  fields : [
    [2, 1],
    [2, 3]
  ]
};
const U = [0, -1], D = [0, 1], L = [-1, 0], R = [1, 0];
const DIR = [
  [U, R, R, R, D],
  [U, U, R, D, D],
  [U, U, U, D, D],
  [U, U, L, L, D],
  [U, L, L, L, L]
];
const test = ({ btns, fields }) => {
  return (
    fields[0][0] === 4 &&
    fields[0][1] === 2 &&
    fields[1][0] === 0 &&
    fields[1][1] === 2
  ) || (
    fields[0][0] === 0 &&
    fields[0][1] === 2 &&
    fields[1][0] === 4 &&
    fields[1][1] === 2
  );
};

const fn = ({ btns, fields }, id) => {
  if (id === 0 && fields[0][0] > 0 && fields[1][0] > 0) {
    fields[0][0]--;
    fields[1][0]--;
  } else if (id === 1) {
    const dir0 = DIR[fields[0][1]][fields[0][0]],
        dir1 = DIR[fields[1][1]][fields[1][0]];
    const x0 = fields[0][0] + dir0[0],
          y0 = fields[0][1] + dir0[1],
          x1 = fields[1][0] + dir1[0],
          y1 = fields[1][1] + dir1[1];
    if (0 <= x0 && x0 < 5 && 0 <= y0 && y0 < 5 &&
      0 <= x1 && x1 < 5 && 0 <= y1 && y1 < 5) {
      fields[0][0] = x0;
      fields[0][1] = y0;
      fields[1][0] = x1;
      fields[1][1] = y1;
    }

  } else if (id === 2 && fields[0][0] < 4 && fields[1][0] < 4) {
    fields[0][0]++;
    fields[1][0]++;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};