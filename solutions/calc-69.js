const init = {
  btns: [],
  fields : [
    [4, 2],
    [4, 3],
    [4, 4]
  ]
};
const U = [0, -1], D = [0, 1], L = [-1, 0], R = [1, 0];
const DIR = [
  [U, R, R, R, R, R, D],
  [U, U, R, R, R, D, D],
  [U, U, U, R, D, D, D],
  [U, U, U, U, D, D, D],
  [U, U, U, L, L, D, D],
  [U, U, L, L, L, L, D],
  [U, L, L, L, L, L, L]
];
const test = ({ btns, fields }) => {
  return fields.map(it => it.join('')).sort().join('') === '135056';
};

const fn = ({ btns, fields }, id) => {
  if (id === 0 && fields[0][0] > 0 && fields[1][0] > 0 && fields[2][0] > 0) {
    fields[0][0]--;
    fields[1][0]--;
    fields[2][0]--;
  } else if (id === 1) {
    const dir0 = DIR[fields[0][1]][fields[0][0]],
        dir1 = DIR[fields[1][1]][fields[1][0]],
        dir2 = DIR[fields[2][1]][fields[2][0]]
    const x0 = fields[0][0] + dir0[0],
          y0 = fields[0][1] + dir0[1],
          x1 = fields[1][0] + dir1[0],
          y1 = fields[1][1] + dir1[1],
          x2 = fields[2][0] + dir2[0],
          y2 = fields[2][1] + dir2[1];
    if (0 <= x0 && x0 < 7 && 0 <= y0 && y0 < 7 &&
      0 <= x1 && x1 < 7 && 0 <= y1 && y1 < 7 &&
      0 <= x2 && x2 < 7 && 0 <= y2 && y2 < 7) {
      fields[0][0] = x0;
      fields[0][1] = y0;
      fields[1][0] = x1;
      fields[1][1] = y1;
      fields[2][0] = x2;
      fields[2][1] = y2;
    }

  } else if (id === 2 && fields[0][0] < 6 && fields[1][0] < 6 && fields[2][0] < 6) {
    fields[0][0]++;
    fields[1][0]++;
    fields[2][0]++;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};