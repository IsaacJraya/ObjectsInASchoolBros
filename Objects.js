var id = 1;

function Teacher (firstName, lastName, subject){
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.sections = [];
}

function Student (firstName, lastName, grade){
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.sections = [];
}

function Section(name, count){
    this.id = id++;
    this.name = name;
    this.count = count;
    this.students = [];
    this.teacher = "";
    this.addStudent = function(student) {
        this.students.push(student);
    };
    this.addTeacher = function(teacher) {
        this.teacher = teacher;
    };
}