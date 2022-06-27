const sample = [5,2,1,4,3];
const mapResult = sample.map(function(value, index, array) {
 console.log('value :', value, 'index :', index, 'array :', array);
 return (value * 2);
});