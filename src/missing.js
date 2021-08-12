
/**
 The missing number problem
 Implement algorithm 1 here
*/
function missing1(A){
    let N = A.length + 1;
    for(let i = 1; i < N; i++){
        let found = false;
        let j = 0;
        while(found === false && j < A.length){
            if(i === A[j]) found = true;
            j++;
        }
        if(found == false) return i;
    }
}


/**
The missing number problem
Implement algorithm 2 here
*/
function sumInts(N){
    return N * (N + 1) / 2;
}

function sumIntsInArr(A){
    let total = 0;
    for(let c = 0; c < A.length; c++){
        total += A[c]; 
    }
    return total;
}

function missing2(A){
    let N = A.length + 1;
    let fullSum = sumInts(N);

    //which summing function runs faster?
    let sum = sumIntsInArr(A);
    // let sum = A.reduce((accumulator, currentValue) => accumulator + currentValue);

    return fullSum - sum;
}

module.exports = {
    missing1, 
    missing2,
}