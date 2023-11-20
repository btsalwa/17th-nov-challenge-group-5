let A =[4,5,6,7,8,8,2,3,1,45,66,90];
let K = 7;
let result = CyclicRotation (A,K);

function CyclicRotation (A,K){

    K = K % A.length;
    for(let i= 0;i<K;i++){

        A.unshift(A.pop());
    }

}
console.log(A);
return A;



function findUnpairedElement(A) {
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    result ^= A[i];
  }

  return result;
}

// Example usage:
const oddArray = [9, 3, 9, 3, 7, 9, 7];
const unpairedElement = findUnpairedElement(oddArray);

console.log("Unpaired Element:", unpairedElement);
