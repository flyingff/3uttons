(()=> {

const init = {
  btns: [4],
  fields : [
    'i','r','r','y','o','y','y','i'
  ]
};

const test = ({ btns, fields }) => {
  return fields.join('') === 'riyirror';
};

const mirror = (ch) => {
  switch (ch) {
    case 'y':
      return 'r';
    case 'r':
      return 'y';
    default:
      return ch;
  }
};

const fn = ({ btns, fields }, id) => {
  if (id === 0 && btns[0] > 0) {
    const pos = btns[0];
    btns[0]--;
    [fields[pos - 1], fields[pos]] = [fields[pos], fields[pos - 1]];
  } else if (id === 2 && btns[0] < 7) {
    const pos = btns[0];
    btns[0]++;
    [fields[pos + 1], fields[pos]] = [fields[pos], fields[pos + 1]];
  } else if (id === 1 && 0 < btns[0] && btns[0] < 7) {
    const pos = btns[0];
    [fields[pos + 1], fields[pos - 1]] = 
      [mirror(fields[pos - 1]), mirror(fields[pos + 1])];
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};

})();