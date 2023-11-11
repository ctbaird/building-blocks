//adapted from java https://www.youtube.com/watch?v=bOk35XmHPKs

const mergesort=(arr)=>{
    const arrSize = arr.length;
    if(arrSize < 2){
        return;
    }
    const middle = Math.floor(arrSize / 2); //if in java, integer division would automatically round down
    const leftSide = [];
    const rightSide = [];

    for(let i=0; i<middle; i++){
        leftSide[i]=arr[i]
    }

    for(let i=middle; i<arrSize; i++){
        rightSide[i-middle]=arr[i];
    }

  	mergesort(leftSide);
  	mergesort(rightSide);

   merge(arr, leftSide, rightSide);
};

const merge = (arr, left, right)=>{
    const leftSize = left.length;
    const rightSize = right.length;
    let i =0, j = 0, k = 0;
    while(i < leftSize && j< rightSize){
        if(left[i]<=right[j]){
            arr[k]=left[i];
            i++;
        }else{
            arr[k]=right[j];
            j++;
        }
        k++;
    }

    while(i<leftSize){
        arr[k]=left[i];
        i++; 
        k++;
    }

    while(j<rightSize){
        arr[k]=right[j];
        j++;
        k++;
    }
}

const arr = Array.from({length: 20}, () => Math.floor(Math.random() * 9));
console.log(arr);
mergesort(arr);
console.log(arr);