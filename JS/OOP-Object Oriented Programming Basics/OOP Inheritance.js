// Person class that is general enough for both a student and a teacher:
class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

// Student:one of Person children
class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
   
  }

  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }

  //method overriding!
  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course);
    }
  }
  
}

// Teacher class which also inherits from Person
class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(name, startYear);
    this.salary = salary;
    this.name = "Professor " + name;
    this.courses = {}; //override the courses attribute
  }

  //override the addCourse method
  addCourse(course) {
    if (this.courses[course]) {
      return this.courses[course]++;
    }
    this.courses[course] = 1;
  }

  giveGrade(studentName, courseName, finalGrade) {
    studentName.receiveGrade(courseName, finalGrade);
  }
}

// Parent-Child-Grandchild relationship
class TeachingAssistant extends Teacher {
  constructor(name, startYear, salary) {
    super(name, startYear, salary);
  }
}

class Principal extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.teachers = [];
     this.students =[];
  }

  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }

  hireTeacher(teacher) {
    this.teachers.push(teacher);
    console.log(`${this.name} just hired ${teacher.name}`);
  }

  recruitStudent(student){
    this.students.push(student);
  }

   expelStudent(student) {
    const index = this.students.findIndex(s => s.name === student.name);
    if (index !== -1) {
      this.students.splice(index, 1);
      console.log(`${this.name} just expelled ${student.name}`);
    } else {
      console.log(`${student.name} not found among students.`);
    }
  }

    transferStudent(student, receivingPrincipal) {
    const index = this.students.findIndex(s => s.name === student.name);
    if (index !== -1) {
      this.students.splice(index, 1);
      receivingPrincipal.students.push(student);
      console.log(
        `${this.name} just transferred ${student.name} to ${receivingPrincipal.name}`
      );
    } else {
      console.log(`${student.name} not found among students.`);
    }
  }
}

// ------------------------------TESTS---------------------------------------------
const s1 = new Student("Ronda", 2017);
console.log(s1.name); //prints "Ronda"
s1.addCourse("Algebra II");
console.log(s1.courses); //prints ["Algebra II"]
const t1 = new Teacher("Cassandra", 2002, 40000);
t1.giveGrade(s1, "Algebra II", 82);
const firstGrade = s1.grades[0];
console.log(
  `${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`
); //above should print "Ronda received an 82 in Algebra II"
console.log(t1.name); //Professor Cassandra
t1.addCourse("Algebra II");
t1.addCourse("Algebra II");
t1.addCourse("Trigonometry");
t1.addCourse("Trigonometry");
console.log(t1.courses); //should print {Algebra II: 2, Trigonometry: 2}
const ta1 = new TeachingAssistant("Brandon", 2014, 20000);
ta1.addCourse("General Relativity");
ta1.giveGrade(s1, "General Relativity", 91);

console.log(ta1.salary); //prints 20000
console.log(ta1.courses); //prints {"General Relativity": 1}
console.log(s1.grades); //prints [{course: "General Relativity", grade: 91}]

const principal = new Principal("Mrs. Smith", 2010);
const teacher = new Teacher("Jones", 2015, 50000);

principal.hireTeacher(teacher);

const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)
const t2 = new Teacher("Kevin", 2006, 30000)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron
