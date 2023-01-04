interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let s1: Student = {
  firstName: "f name",
  lastName: "l name",
  age: 23,
  location: "abuja"
}

let s2: Student = {
  firstName: "f2 name",
  lastName: "l2 name",
  age: 23,
  location: "abuja 2"
}


let arr: Student[] = [s1, s2]

console.log(arr);
