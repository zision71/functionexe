// function that returns the year someone is born given their age as input.

function year(age) {
  return 2020 - age;
}
console.log(year(25));

// function that takes someone's name and age as input and returns a string that states the person's name and year they were born in a sentence.

function nameage(name, age) {
  return "My Name is" + " " + name + " " + "My Birth Year is:" + year(age);
}
console.log(nameage("jhon", 25));
