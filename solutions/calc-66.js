(()=> {

const init = {
  btns: [],
  fields : [
    [0, 1, 'D'],
    [1, 4, 'D'],
    [3, 1, 'D'],
    [4, 3, 'D']
  ]
};

const MAP = [
  ['RD',  'LR', 'LD',   '',     ''    ],
  ['UD',  '',   'UDR',  'LD',   ''    ],
  ['UDR', 'LR', 'LRUD', 'LRU',  'LD'  ],
  ['UD',  '',   'UD',   '',     'UD'  ],
  ['UR',  'LR', 'LRU',  'LR',   'LU'  ]
];

const test = ({ btns, fields }) => {
  return fields
    .map(it => it[0] + '' + it[1])
    .sort()
    .join('') === '00042243';
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