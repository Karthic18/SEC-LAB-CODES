let num = 5;
if (num > 0) {
  console.log(`${num} is positive`);
}

let age = 17;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

let score = 88;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

let day = 3;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number! Please enter 0 to 6.");
}

let testAges = [18, 0, -1];
testAges.forEach(testAge => {
  if (testAge >= 18) {
    console.log(`Age ${testAge}: Adult`);
  } else if (testAge >= 0) {
    console.log(`Age ${testAge}: Minor`);
  } else {
    console.log(`Age ${testAge}: Invalid input`);
  }
});

