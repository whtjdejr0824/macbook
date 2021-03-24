// const dupArr = [1, 2, 3, 1, 2];

// const set = new Set(dupArr);

// const uniqueArr = [...set];

// document.writeln(Array.isArray(uniqueArr))
// document.writeln(uniqueArr);

var arr = ['apple', 'orange', 'apple', 'blueberry', 'grape', 'orange'];
var uniqueArr = [];

for (var i=0; i<arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) uniqueArr.push(arr[i]);
}

console.log(uniqueArr)