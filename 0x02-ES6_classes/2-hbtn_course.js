export default class HolbertonCourse {
  constructor(name, length, students) {
    this.validateType(name, length, students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  validateType(name, length, students) {
    if (name && typeof name !== 'string') {
      this._name = name;
      throw new TypeError('Name must be a string');
    }

    if (length && typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (students && !(students instanceof Array)) {
      throw new TypeError('students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    this.validateType(name, false, false);
    this._name = name;
  }

  set length(length) {
    this.validateType(false, length, false);
    this._length = length;
  }

  set students(students) {
    this.validateType(false, false, students);
    this._students = students;
  }
}
