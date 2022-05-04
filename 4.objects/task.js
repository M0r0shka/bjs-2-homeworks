function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = Object.assign(marks);
  } else {
    for (let mark of marks) {
      this.marks.push(mark);
    }
  }
}

Student.prototype.getAverage = function () {
  if (this.marks !== undefined) {
    const sum = this.marks.reduce((acc, item, idx, arr) => {
      {
        acc = acc + item;
      }
      return acc;
    }, 0);
    return (sum / this.marks.length);
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
