// Code your solution here!

const fact = n => {
  return n <= 1 ? 1 : n*fact(n-1)
}

const sum = arr => {
  const n = arr.length;
  if(n == 0){
    return 0;
  } else if(n == 1){
    return arr[0];
  } else if(n == 2){
    return arr[0] + arr[1];
  } else {
    const mid = Math.floor(n / 2);
    const left = arr.slice(0,mid)
    const right = arr.slice(mid,n)
    return sum(left) + sum(right)
  }
}