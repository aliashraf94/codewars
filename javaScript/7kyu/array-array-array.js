// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].


// Solution

function explode(x){
    let [a,b] = x;
    
    if(typeof a == "number" && typeof b == "number") return new Array(a+b).fill(x);
    else if(typeof a == "number") return new Array(a).fill(x);
    else if(typeof b == "number") return new Array(b).fill(x);
    
    return 'Void!';
  }

// Other Solution

const explode=([x,y])=>x+0!=x&&y+0!=y?"Void!":Array((+x||0)+(+y||0)).fill([x,y])

// Other One

function explode(x){
    let score = 0;
    let array = [];
    if (typeof x[0] !== 'number' && typeof x[1] !== 'number') return 'Void!';
    if (typeof x[0] !== 'number' && typeof x[1] === 'number') score = x[1] ;
    if (typeof x[0] === 'number' && typeof x[1] !== 'number') score = x[0];
    if (typeof x[0] === 'number' && typeof x[1] === 'number') score = x[0] + x[1];
    for (var i = 0; i < score; i++) {
      array.push(x);
    }
    return array;
  }

  