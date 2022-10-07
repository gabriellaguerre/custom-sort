function ageSort(users) {
  // Your code here
  return users.sort((a, b) => {
    return a.age - b.age
  })

}

function oddEvenSort(arr) {
  // Your code here
  let evens = []
  let odds = []

  while (arr.length) {
    let minEven = Infinity
    let minOdd = Infinity

    for (let i = 0; i < arr.length; i++) {

      let ele = arr[i]
      if (ele % 2 === 0) {
        if (ele < minEven) {
          minEven = ele

        } else if (ele % 2 === 1) {
          if (ele < minOdd) {
            minOdd = ele
          }
        }
      }
    }
    if (minEven !== Infinity) {
      evens.push(minEven);

      // Remove the smallest even value from the array
      let smallestEvenIndex = arr.indexOf(minEven);
      arr.splice(smallestEvenIndex, 1);
  }

  if (minOdd !== Infinity) {
      odds.push(minOdd);

      // Remove the smallest odd value from the array
      let smallestOddIndex = arr.indexOf(minOdd);
      arr.splice(smallestOddIndex, 1);
  }

  }
  return odds
}

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

// const users = [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     occupation: "Software Engineer",
//     friends: [2, 3, 4],
//   },
//   {
//     id: 2,
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 25,
//     occupation: "Data Scientist",
//     friends: [1, 4],
//   },
//   {
//     id: 3,
//     firstName: "Mary",
//     lastName: "Smith",
//     age: 32,
//     occupation: "UX Designer",
//     friends: [2, 4],
//   },
//   {
//     id: 4,
//     firstName: "James",
//     lastName: "Johnson",
//     age: 55,
//     occupation: "CTO",
//     friends: [1, 2, 3],
//   },
// ];
// console.log(ageSort(users))
const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
console.log(oddEvenSort(arr1))





module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
