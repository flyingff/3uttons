(()=> {

const init = {
  btns: [],
  fields : [
  
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 0],
  /* 0  0  0  1  2  2  2  2  3  4  4  5
  
    [1, 0, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 0],
  */
    0
  ]
};

const multi = [3, 1, 4, 1, 2, 1];
const post = (result) => {
  const path = [];
  result.forEach((it, index) => {
    const n = multi[index % multi.length];
    for (let i = 0; i < n; i++) {
      path.push(it);
    }
  });
  return path;
};

const N = init.fields[0].length;

const test = ({ btns, fields }) => {
  return fields[0].reduce((x, y) => x + y) === 0 &&
      fields[1].reduce((x, y) => x + y) === 0;
};

const COUNTS = [[1, 0], [0, 1], [1, 1]];
const fn = ({ btns, btns_, fields }, id) => {
  if (id !== btns[btns.length - 1]) {
    btns.push(id);
  }
  // not accept more than 5 iter
  if (btns.length > 5) {
    return { btns: btns_, fields };
  }
  const counts = COUNTS[id];
  const ptr = fields[2];
  if (fields[0][ptr] < counts[0] || fields[1][ptr] < counts[1]) {
    return { btns: btns_, fields };
  }

  fields[0][ptr] -= counts[0];
  fields[1][ptr] -= counts[1];
  fields[2] = (ptr + 1) % N;

  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();