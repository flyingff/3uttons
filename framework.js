const Heap = require('fastpriorityqueue');

/**
const init = {
  // 'btns' represents state of buttons, or something
  // not presented in playground
  btns: [4, 0, 0],
  // 'fields' represents state of playground
  fields : [
    'i','r','r','r','o','r','y','i'
  ],
  // 'path' records the solutions
  // 0, 1, 2 represents button in left, center and right
  path: [0, 2, 1, 1]
};
*/

/**
  A map is used to collect all
  status and steps to reach it
        key        ->    value
  [(string)Status] -> [(int)Steps]
*/
const map = new Map();
/**
  calculates the state string of given object
  and record it in map

  returns whether it's the best solution
  to its state
*/
const mkState = (obj) => {
  // calculate the state if not exists 
  if (!obj.state) {
    obj.state = JSON.stringify(obj.btns) + JSON.stringify(obj.fields);
  }
  const state = obj.state;
  if (map.has(state)) {
    const bestSteps = map.get(state);
    if (bestSteps <= obj.path.length) {
      // not better than current solution
      return false;
    } else {
      // better than current solution
      // update map
      map.set(state, obj.path.length);
      return true;
    }
  } else {
    // first reached, update map
    map.set(state, obj.path.length);
    return true;
  }
};

/**
  do one step
*/
const step = (fn, obj, btn) => {
  // deep copy
  const copied = JSON.parse(JSON.stringify(obj));
  const ret = fn({
    btns: copied.btns,
    btns_: obj.btns,
    fields: copied.fields,
    fields_: obj.fields
  }, btn);
  ret.path = [...obj.path, btn];
  return ret;
};

/**
  uses BFS search to get best solution
  init:     initial state
  fn:       a function simulates actions of buttons
  test:     a function test whether the state reaches the goal
  maxSteps: limit the maximum search depth
  cbk:      callback funtion when a solution is discovered
*/
const bfs = (init, fn, test, cmp, maxSteps, cbk) => {
  // state to be resolved
  const heap = new Heap(cmp);
  init.path = [];
  mkState(init);
  heap.add(init);

  let lastDepth = 0;
  process.stdout.write("Searching for Solution");
  while(!heap.isEmpty()) {
    const o = heap.poll();

    if (o.path.length >= maxSteps) {
      // exceed maximum search depth
      continue;
    } else if (o.path.length > lastDepth) {
      // report current searching depth
      process.stdout.write(".");
      lastDepth = o.path.length;
    }
    for(const op of [0, 1, 2]) {
      const ret = step(fn, o, op);
      // check whether it's the best solution to its state
      if (!mkState(ret)) {
        continue;
      }
      // check whether new state finishes the game
      if (test(ret)) {
        process.stdout.write("\n");
        cbk(ret);
        return true;
      } else {
        // if not, put it to list
        heap.add(ret);
      }
    }
  }
  process.stdout.write("\n");
  return false;
};

const defaultCmp = (x, y) => {
  return x.path.length < y.path.length;
};

const chunk = (array, n) => 
  Array.apply(null, {
      length: Math.ceil(array.length / n)
  }).map((x, i) => {
      return array.slice(i * n, (i + 1) * n);
  })
;

const COLORS = [
  '\033[33;40;1;7m 0 \033[0m',
  '\033[31;40;1;7m 1 \033[0m',
  '\033[32;40;1;7m 2 \033[0m',
]
const format = (path) => {
  console.log('Solution got: [\n')
  chunk(path, 10).forEach(it => {
    it = it.map(v => COLORS[v]);
    it.splice(6, 0, ' ');
    it.splice(3, 0, ' ');
    console.log('  ', it.join(' '), '\n');
  });
  console.log(']');
}
module.exports = {
  // for debug only
  test: (initial, fn, steps) => {
    let o = initial;
    initial.path = [];

    for(const op of steps) {
      o = step(fn, o, op);
      console.log(JSON.stringify(o));
    }
  },
  solve: (initial, fn, test, cmp, post, maxSteps = 30) => {
    // clear status
    map.clear();
    if (typeof cmp !== 'function') {
      cmp = defaultCmp;
    }

    let path = false;
    if(!bfs(initial, fn, test, cmp, maxSteps, solution => {
      path = solution.path;
      if (typeof post === 'function') {
        path = post(path);
      }
      format(path);
    })) {
      console.log("No solution found in %d steps.", maxSteps);
    }
    return path;
  }
};