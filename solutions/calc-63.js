(()=> {

const init = {
  btns: [],
  fields : []
};
const test = ({ btns, fields }) => {
  return fields.join('') === '128';
};

const reg = /([^0]+)|(0+)/g;

const fn = ({ btns, fields, fields_ }, id) => {
  if (id === 0 && fields.length < 8) {
    fields.push(0);
  } else if (id === 1 && fields.length < 8) {
    fields.push(fields.length + 1);
  } else if (id === 2 && fields.length > 0) {
    const ret = [];
    const str = fields.join('');
    let match;
    while(match = reg.exec(str)) {
      if (match[1]) {
        let n = match[1]
            .split('')
            .map(it => it | 0)
            .reduce((x, y) => x + y);
        ret.push(...
            n.toString()
            .split('')
            .map(it => it | 0)
          );
      } else if(match[2]) {
        const n = match[2].length;
        for(let i = 1; i < n; i++) {
          ret.push(0);
        }
      }
    }
    fields = ret;
  }

  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();