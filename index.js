const numConfig = (num) => {
  if (!num) return;
  // 1) number to itterable
  const numToString = num.toString();
  // 2) from string to Array
  const originalArray = numToString.split("");
  // 3) array of numbers
  const originalArrayToNum = originalArray.map((el) => +el);
  // 4) unique nums from Array
  const uniqueNums = originalArrayToNum.filter(
    (el, i) => originalArrayToNum.indexOf(el) === i
  );
  // 5) dupicat numbers place in original arr
  const duplicatNumsInOriginal = uniqueNums.map((duplicatnum) => {
    return originalArrayToNum.map((origNum) => origNum === duplicatnum);
  });
  //  6) number of duplicates of unique nums
  const numberOfDuplicates = duplicatNumsInOriginal.map((array) =>
    array.filter((arrItem) => arrItem === true)
  );

  //  7) boolean length into number type for output
  const finalNumberOfDuplicates = numberOfDuplicates.map(
    (array) => array.length
  );

  //  8) number of dumpicates and unique numbers looped
  const finalArr = uniqueNums.map((uniqueNum, index) => {
    const uniqueDuplicatesNum = finalNumberOfDuplicates[index];
    return [uniqueDuplicatesNum, uniqueNum];
  });

  const outputToString = finalArr.flat().toString();

  const modifiedngNumber = +outputToString.replaceAll(",", "");

  return modifiedngNumber;
};

const configuredNum = numConfig(11235);
