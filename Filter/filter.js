
function myfilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i=i+1) {
      if (callback(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  }
  
   const a= [0,5.5,15,32,60,46,10]
   const result=a.filter(i=>i<=10);
   console.log(result);