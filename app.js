// Original array holding the secret message.
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// Using array method pop to remove last string array element.
secretMessage.pop();
// Checking the size of the array via the length object.
const arraySize = secretMessage.length;
console.log(arraySize);
// Add to the end of the array two strings via the array method push.
secretMessage.push('to', 'Program');
// Change the array object at index 7 to a different string.
secretMessage[7] = 'right';
// Using an array method shift to remove the first string in the array
secretMessage.shift();
// Using an array method unshift to add a string to the start of the array
secretMessage.unshift('Programming');
secretMessage.splice(6,5,'know,');
console.log(secretMessage.join());