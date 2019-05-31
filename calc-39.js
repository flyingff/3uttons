const init = {
  btns: [4],
  fields : [
    'i','r','r','r','o','r','y','i'
  ]
};

const test = ({ btns, fields }) => {
  return fields.join('') === 'riyirror';
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
  } else if (id === 1) {
    const pos = btns[0];
    if (pos > 1) {
      fields.unshift(fields.splice(pos - 1, 1));
    }
    if (pos < 6) {
      fields.push(fields.splice(pos + 1, 1))
    }
  }
  return { btns, fields };
};

module.exports = {
  fn, test, init
};