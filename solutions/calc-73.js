(()=> {

const init = {
  btns: [4],
  fields : "TNHK YOAU".split('')
};
const test = ({ btns, fields }) => {
  return fields.join('') === 'THANK YOU';
};

const fn = ({ btns, fields, fields_ }, id) => {
  const pos = btns[0];
  if (id === 0 && pos > 0) {
    fields[pos] = fields_[pos - 1];
    fields[pos - 1] = fields_[pos];

    btns[0]--;
  } else if (id === 1 && 0 < pos && pos < 8) {
    fields[pos - 1] = fields_[pos + 1];
    fields[pos + 1] = fields_[pos - 1];
  } else if (id === 2 && pos < 8) {
    fields[pos] = fields_[pos + 1];
    fields[pos + 1] = fields_[pos];

    btns[0]++;
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();