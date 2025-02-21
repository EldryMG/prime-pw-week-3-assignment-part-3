console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');

var partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
var supplyChanges = [3, 4, -6, 0, 7, 11];
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);
// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
console.log(supplyChanges.pop());

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges);
// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');

for (let x = 0; x < supplyChanges.length; x++) {
  if (supplyChanges[x] > 0) {
    console.log('Added ' + supplyChanges[x] + ' parts.');
  } else if (supplyChanges[x] === 0) {
    console.log('No Changes.');
  } else {
    console.log('Removed ' + supplyChanges[x] + ' parts');
  }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');
for (parts of supplyChanges) {
  if (parts > 0) {
    console.log('We added ', parts + ' parts.');
  } else if (parts === 0) {
    console.log('No changes.');
  } else {
    console.log('We removed', parts + ' parts.')
  }
}


// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');
var a = 0
var b = 0
var c = 0

while (a < supplyChanges[a]){
  console.log(`added ${supplyChanges[a]} parts.`);
  a++; //Code stops here; since 'a'=2 at this point and the next number in the index is 0, the only thing I could think of doing is creating a new variable 'b'.
  //How would this problem be solved more efficiently?
} while (b > supplyChanges[a]){
  console.log(`removed ${supplyChanges[a]} parts.`);
  a++;
} while (c === supplyChanges[a]){
  console.log(`No changes.`);
  a++;
} while (a <= supplyChanges[a]){
  console.log(`Added ${supplyChanges[a]} parts.`);
  a++;
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');

sum = 0  //Did this require the sum variable or is there a different way?
for (i=0; i<supplyChanges.length; i++){
  console.log(sum += supplyChanges[i]);
}
