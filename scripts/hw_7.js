const array = [];
const size = prompt("Number of elemets in arrey will be:",0);
 
for(object=0; object < size; object++) 
{
    array[object] = prompt('Enter array element №' + (object+1));
}
const arraySorted = array.sort((a,b) => a-b)
console.log(arraySorted);
console.log(arraySorted.splice(1,3));
console.log(arraySorted);