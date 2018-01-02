// Code your solutions in this file
var newEmployees = ['Ada', 'Brendan', 'Ali'];

function printBadges(newEmployees) {
  for (i=0, i<newEmployees.length, i++) {
    console.log("Welcome ${newEmployees[i]}! You are employee #${i}.")
  }
  console.log(newEmployees)
}
