const framework = require('./framework');
console.log("==============================");
console.log("=      Buttons Solutions     =");
console.log("= (type q/exit/quit to quit) =");
console.log("==============================");

const prompt = () => {
  process.stdout.write('Which level do you want to know: ');
}
process.stdin.setEncoding('utf8');
process.stdin.on('data', input => {
  const str = input.toString().trim();
  if (str === 'q' || str === 'exit' || str === 'quit') {
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
      framework.solve(mod.init, mod.fn, mod.test);
    } catch(ex) {
      console.log("Exception:", ex);
    }
  }
  prompt();
})
prompt();