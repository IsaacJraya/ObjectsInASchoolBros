function buildSelectLists(){
    var sSelectList = "";
    for (var i = 0; i < allStudents.length; i++) {
        sSelectList += "<option value ='" + allStudents[i].id + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>"
    }
    document.getElementById("studentSelectList").innerHTML += sSelectList;
    console.log(sSelectList);

    var tSelectList = "";
    for (var x = 0; x < allTeachers.length; x++) {
        tSelectList += "<option value ='" + allTeachers[x].id + "'>" + allTeachers[x].firstName + " " + allTeachers[x].lastName + "</option>"
    }
    document.getElementById("teacherSelectList").innerHTML += tSelectList;

    var secSelectList = "";
    for(var z = 0; z < allSections.length; z++){
        secSelectList += "<option value ='"+ allSections[z].id + "'>" + allSections[z].name + "</option>"
    }
    document.getElementById("sectionSelectList").innerHTML += secSelectList;
    document.getElementById("sectionSelectList2").innerHTML += secSelectList;
    document.getElementById("sectionSelectList3").innerHTML += secSelectList;
    document.getElementById("sectionSelectList4").innerHTML += secSelectList;
}
function addStudent() {
    var firstName = document.getElementById("studentFirstName").value;
    var lastName = document.getElementById("studentLastName").value;
    var grade = document.getElementById("studentGrade").value;
    allStudents.push(new Student(firstName, lastName, grade));
    buildSelectLists();
    //allSections[2].addStudentSection(allStudents[1]);

}
function addTeacher(){
    var firstName = document.getElementById("teacherFirstName").value;
    var lastName = document.getElementById("teacherLastName").value;
    var subject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(firstName, lastName, subject));
    buildSelectLists();
}
function addSection() {
    var sectionName = document.getElementById("sectionName").value;
    var sectionCount = document.getElementById("sectionCount").value;
    allSections.push(new Section(sectionName, sectionCount));
    buildSelectLists();
}
function listAll() {
    var html = "<table border = '5'>";
    if (document.getElementById("listAllBros").value === "listStudents"){
        for (var a = 0; a < allStudents.length; a++) {
            html += "<tr>";
            html += "<td>" + "Student:" + "</td>";
            html += "<td>" + allStudents[a].firstName + "</td>";
            html += "<td>" + allStudents[a].lastName + "</td>";
            html += "<td>" + allStudents[a].grade + "</td>";
            html += "</td>";
        }
        document.getElementById("studentTable").innerHTML = html;
    }
    if (document.getElementById("listAllBros").value === "listTeachers"){
        for (var i = 0; i < allTeachers.length; i++) {
            html += "<tr>";
            html += "<td>" + "Teacher:" + "</td>";
            html += "<td>" + allTeachers[i].firstName + "</td>";
            html += "<td>" + allTeachers[i].lastName + "</td>";
            html += "<td>" + allTeachers[i].subject + "</td>";
            html += "</td>";
        }
        document.getElementById("teacherTable").innerHTML = html;
    }
    if (document.getElementById("listAllBros").value === "listSections"){
        for (var z = 0; z < allSections.length; z++) {
            html += "<tr>";
            html += "<td>" + allSections[z].name + "</td>";
            html += "<td>" + allSections[z].count + "</td>";
            html += "</td>";
        }
        document.getElementById("sectionTable").innerHTML = html;
    }
}

function getSectionById(secID){
    for(var i = 0; i < allSections.length;i++){
        if(allSections[i].id == secID){
            return allSections[i];
        }
    }
}
function getStudentById(studentID){
    for(var i = 0; i < allStudents.length;i++){
        if(allStudents[i].id == studentID){
            return allStudents[i];
        }
    }
}
function getTeacherById(teacherID){
    for(var i = 0; i < allTeachers.length;i++){
        if(allTeachers[i].id == teacherID){
            return allTeachers[i];
        }
    }
}
function addStudentToSection() {
    var student = getStudentById(document.getElementById("studentSelectList").value);
    var section = getSectionById(document.getElementById("sectionSelectList").value);
    section.addStudent(student);
}
function addTeacherToSection() {
    var teach = getTeacherById(document.getElementById("teacherSelectList").value);
    var sec = getSectionById(document.getElementById("sectionSelectList2").value);
    sec.addTeacher(teach);
}

function listStudentsInSections() {
    var html = "<table border = '5'>";
    var sec = getSectionById(document.getElementById("sectionSelectList3").value);
    for (var a = 0; a < sec.students.length; a++) {
        html += "<tr>";
        html += "<td>" + "Student:" + "</td>";
        html += "<td>" + sec.students[a].firstName + "</td>";
        html += "<td>" + sec.students[a].lastName + "</td>";
        html += "<td>" + sec.students[a].grade + "</td>";
        html += "</td>";
    }
    document.getElementById("output").innerHTML = html;
    console.log(sec);
}
function listTeachersInSections() {
    var sec = getSectionById(document.getElementById("sectionSelectList4").value);
    document.getElementById("output2").innerHTML = sec.teacher.firstName + " " + sec.teacher.lastName;
}
