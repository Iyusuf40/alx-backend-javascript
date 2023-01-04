interface Teacher {
  firstName: string;
  lastName: string;
  yearsOfExperience?: number;
  location: string;
  fullTimeEmployee: boolean;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
