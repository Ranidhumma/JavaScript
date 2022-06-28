
/* In this function we are declaring an accumulator and accumulate the sum all the elements in the array */
Array.prototype.myReduce = function(callback){
     var a = 0;                              
     for(let i=0; i<this.length; i++)       
     {
         callback(a = a+this[i])           
     }
      
     return a;                              
}
var arr = [1,2,4,6,5.5,2.5] ;
let result = arr.myReduce((acc,item)=>acc+item);
console.log(result);


