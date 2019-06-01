const cwd = require('path').resolve();
const framework = require('./framework');

console.log("================================");
console.log("=                              =");
console.log("=       3uttons Solutions      =");
console.log("=  (type q/exit/quit to quit)  =");
console.log("=                              =");
console.log("================================");

const prompt = () => {
  process.stdout.write('Which level do you want to know: ');
}
process.stdin.setEncoding('utf8');
process.stdin.on('data', input => {
  const str = input.toString().trim();
  if (str.toLowerCase() === 'q' ||
    str.toLowerCase() === 'exit' ||
    str.toLowerCase() === 'quit') {
    console.log("Bye");
    process.exit(0);
    return;
  }
  const n = parseInt(str);

  if (n < 1 || n > 73 || isNaN(n)) {
    console.log("Invalid. Only 1 - 73 are allowed");
  } else {
    try {
      const mod = require('./solutions/calc-' + n);
      if (mod.ops) {
        framework.test(mod.init, mod.fn, mod.ops);
      }
      framework.solve(mod.init, mod.fn, mod.test, mod.cmp, mod.post, mod.max);
    } catch(ex) {
      console.log("Exception:", ex);
      // clear cahce for better debug
      for (const key in require.cache) {
        if (key.endsWith('calc-' + n + '.js')) {
          delete require.cache[key];
          console.log("Module unloaded: ", key);
        }
      }
    }
  }
  prompt();
})
prompt();