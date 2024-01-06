// run `node index.js` in the terminal
function sortStudents(students) {
  return students.sort((a, b) => {
    const totalMarksA = a.chemistry + a.biology;
    const totalMarksB = b.chemistry + b.biology;

    if (totalMarksA !== totalMarksB) {
      return totalMarksB - totalMarksA;
    } else if (a.biology !== b.biology) {
      return b.biology - a.biology;
    } else {
      return 0;
    }
  });
}

///case1
let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1995',
    biology: 90,
    chemistry: 81,
  },

  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },

  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },

  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let sortedTest1 = sortStudents(testCase1);
console.log(
  'Test Case 1 Result:',
  sortedTest1.map((students) => students.name)
);

//Case 2
let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1995',
    biology: 80,
    chemistry: 100,
  },

  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },

  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },

  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let sortedTest2 = sortStudents(testCase2);
console.log(
  'Test Case 2 Result:',
  sortedTest2.map((student) => student.name)
);

console.log(`Hello Node.js v${process.versions.node}!`);
