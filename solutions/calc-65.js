const init = {
  btns: [],
  fields : [
    [0, 4, 'D'],
    [1, 0, 'D'],
    [3, 4, 'D'],
    [4, 0, 'D']
  ]
};

const MAP = [
  ['DR',  'LR', 'LR',   'LR', 'LD'  ],
  ['UD',  '',   '',     '',   'UD'  ],
  ['UD',  '',   '',     '',   'UD'  ],
  ['UD',  '',   '',     '',   'UD'  ],
  ['UR',  'LR', 'LR',   'LR', 'LU'  ]
];

const test = ({ btns, fields }) => {
  return fields
    .map(it => it[0] + '' + it[1])
    .sort()
    .join('') === '02044143';
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