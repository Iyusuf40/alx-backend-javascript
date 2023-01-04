interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {

  salary: number | string;

  constructor(salary: number | string) {
    this.salary = salary;
  }

  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break"
  }
  
  workDirectorTasks() {
    return "Getting to director tasks"
  }  
}

class Teacher implements TeacherInterface {

  salary: number | string;  

  constructor(salary: number | string) {
    this.salary = salary; 
  }

  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot have a break"
  }
  
  workTeacherTasks() {
    return "Getting to work"
  } 
}

function createEmployee(salary: number | string) {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher(salary);
  }
  return new Director(salary);
}

/*
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
*/

function isDirector(obj: TeacherInterface | DirectorInterface): boolean {
  if (obj.getCoffeeBreak() === "Getting a coffee break") {
    return true;
  }
  return false;
}

function executeWork(obj: TeacherInterface | DirectorInterface): string {
  if (isDirector(obj)) {
    return (<DirectorInterface>obj).workDirectorTasks();
  }
  return (<TeacherInterface>obj).workTeacherTasks();
}


console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
