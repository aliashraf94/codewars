// I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order.
// Your task is to return the value of D.

// Solution

function alphabet(ns) {
    let sorted = ns.sort((a,b) => a - b)
    return sorted[7] / sorted[sorted[0] * sorted[1] == sorted[2] ? 3 : 2]
  }

// Other Solution

function alphabet(ns) {
    ns.sort((a, b) => a - b);
    let a = ns[0];
    let b = ns[1];
    let AxB = a*b;
    let c = ns[2] === AxB? ns[3] : ns[2];

    let BxC = b*c;
    let CxD = ns[ns.length-1];

    
    let d = CxD/c

    return d;
  }

console.log(alphabet([2,3,4,1,12,6,2,4]))