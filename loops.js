
function forLoop(array1){
  for(let i=0; i<25; i++){
    if(i===1){
    array1.push("I am 1 strange loop.")
  }
  else{
    array1.push('I am ${i} strange loops.')
  }
  }
  return array1
}


function whileLoop(n){
  while (n>0){
    console.log(n--)
  }

}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do{
    array.shift();
  }
  while(array.length > 0 && maybeTrue());
}
return array
}
