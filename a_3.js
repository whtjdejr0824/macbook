// // id가 중복되는 것을 제거.

// let example = [{ id: 123}, { id: 456}, { id: 123}];

// loadsh.uniqBy(example, "id");

// console.log(example)

const list = [{x:1,y:2}, {x:3,y:4}, {x:5,y:6}, {x:1,y:2}];

function dedupe(arr) {
  return arr.reduce(function(p, c) {

    // create an identifying id from the object values
    var id = [c.x, c.y].join('|');

    // if the id is not found in the temp array
    // add the object to the output array
    // and add the key to the temp array
    if (p.temp.indexOf(id) === -1) {
      p.out.push(c);
      p.temp.push(id);
    }
    return p;

    // return the deduped array
  }, {
    temp: [],
    out: []
  }).out;
}

console.log(dedupe(list));