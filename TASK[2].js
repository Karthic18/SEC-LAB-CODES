let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let userInput;
do {
  userInput = prompt("Enter number 5 to stop:");
} while (parseInt(userInput) !== 5);

console.log("Correct input received.");

let N = 10;
let sum = 0;
for (let j = 1; j <= N; j++) {
  sum += j;
}
console.log(`Sum of first ${N} natural numbers is: ${sum}`);

for (let row = 1; row <= 10; row++) {
  let line = "";
  for (let col = 1; col <= 10; col++) {
    line += (row * col).toString().padStart(4, ' ');
  }
  console.log(line);
}
