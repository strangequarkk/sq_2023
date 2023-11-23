/* SCRAP just testing code for a student lol
 *
 */
const maxCols = 5;

function splitAtIndex(arr, index) {
  const front = arr.slice(0, index);
  const back = arr.slice(index);
  return [front, back];
}

function insertNewArr(originalArr, insertedArr, rowIndex, colIndex) {
  let targetRow = originalArr[rowIndex];
  //assuming there's a row here already
  if (targetRow) {
    //split the original row at that index into "front" & "back" pieces
    const [frontPiece, backPiece] = splitAtIndex(targetRow, colIndex);
    //make a combined array with insertedarr sandwiched in there
    const combinedArr = [...frontPiece, ...insertedArr, ...backPiece];

    if (combinedArr.length <= maxCols) {
      //the new array fits on one line
      //overwrite insertedArr[rowIndex] with combined array
      originalArr[rowIndex] = combinedArr;
    } else {
      //split the combinedArr to have length of maxCols
      const [trimmedLine, remainder] = splitAtIndex(combinedArr, maxCols);

      //the front half of that becomes originalArray[rowIndex]
      originalArr[rowIndex] = trimmedLine;

      //if there's anything left over, push it into position 0 of the next row
      if (remainder.length > 0) {
        originalArr = insertNewArr(originalArr, remainder, rowIndex + 1, 0);
      }
    }
  } else {
    //if we're adding onto the end of newArray, just push the inserted arr as a new row
    if (insertedArr.length <= maxCols) {
      originalArr.push(insertedArr);
    } else {
      //if insertedArr is longer than max columns, we have to break it up
      const [nextLine, remainder] = splitAtIndex(insertedArr, maxCols);
      originalArr.push(nextLine);
      originalArr = insertNewArr(originalArr, remainder, originalArr.length, 0);
    }
  }
  return originalArr;
}

//insert into a clean duplicate bc it's nicer
function insertClean(originalArray, insertedArray, rowIndex, colIndex) {
  let newArray = originalArray.map((oldRow) => {
    return [...oldRow];
  });
  return insertNewArr(newArray, insertedArray, rowIndex, colIndex);
}
let nestedArray = [
  ["a", "b", "c"],
  ["d", "e", "f", "g"],
];
console.log(nestedArray);

console.log("insert [x,y]");
const newArr = insertClean(nestedArray, ["x", "y"], 0, 2);
console.log(newArr);
console.log("insert [x,y,z]");
const testArr = insertClean(
  nestedArray,
  ["x", "y", "z", "l", "m", "n", "o", "p", "q"],
  0,
  2
);
console.log(testArr);
/* END SCRAP */
