export default function appendToEachArrayValue(array, appendString) {

  let array= [];
  for (let idx of array) {
    array.push(idx + appendString);
  }

  return array;
}
