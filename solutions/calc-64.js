(()=> {

const init = {
  btns: [],
  fields : [
    [0, 0, 'D'],
    [1, 2, 'D'],
    [2, 0, 'D'],
    [3, 1, 'D']
  ]
};

const MAP = [
  ['D',   'R',  'LRD',  'L'   ],
  ['UD',  'D',  'U',    'D'   ],
  ['U',   'U',  'R',    'LU'  ]
];

const test = ({ btns, fields }) => {
  return fields
    .map(it => it[0] + '' + it[1])
    .sort()
    .join('') === '01112131';
};


const fn = ({ btns, fields }, id) => {
  if (id === 0) {
    for(const pt of fields) {
      const [x, y] = pt;
      if (MAP[y][x].includes('L')) {
        pt[0]--;
      }
    }
  } else if (id === 1) {
    for(const pt of fields) {
      const [x, y, last] = pt;
      if (MAP[y][x].includes(last)) {
        pt[1] += (last === 'D' ? 1 : -1);
      } else {
        const d2 = pt[2] = (last === 'D' ? 'U' : 'D');
        if (MAP[y][x].includes(d2)) {
          pt[1] += (d2 === 'D' ? 1 : -1);
        }
      }
    }
  } else if (id === 2) {
    for(const pt of fields) {
      const [x, y] = pt;
      if (MAP[y][x].includes('R')) {
        pt[0]++;
      }
    }
  }

  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();