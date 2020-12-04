import Student from "./Student.js"
import Teacher from "./Teacher.js"

class Class {
    ClassId;
    Subject;
    Teacher;
    Students;
    constructor (ClassId,Subject,Teacher,Students){
        this.ClassId= ClassId;
        this.Subject = Subject;
        this.Teacher= Teacher;
        this.Students = Students;
    }
    addClass(c){
          let totalClass = []
          totalClass.push(c)
          console.log(totalClass);
    }

    addStudent(className,student) {
         if (student instanceof Student && className instanceof Class){
               className.Students.push(student)
         }
            console.log(className);
        }
    removeStudent(className,student) {
        if (student instanceof Student && className instanceof Class){
           for(let i = 0;  i<className.Students.length; i++){
            if( student.id == className.Students[i].id){
                    className.Students.splice(i,1)
            }
            
            
        }
        console.log(className);
    }
    }

    editStudent(className,student,oldValue,newValue){
        if(student instanceof Student && className instanceof Class){
            for(let i = 0 ; i< className.Students.length;i++){
                if(student.id == className.Students[i].id){
                    className.Students[i][oldValue]= newValue
                }
            }
            console.log(className.Students);
        }
    }

    readStudent(className){
        if( className instanceof Class){
            
                console.log(className.Students);
            }
        }


    readTeacher(className){
        if(className instanceof Class){
            console.log(className.Teacher);
        }
    }

    findStudent (className,id){
        if (className instanceof Class){
            for(let i = 0;i < className.Students.length;i++){
                if (className.Students[i].id == id){
                    console.log(className.Students[i]);
                }
            }
        }
    }
    findStudentName (className,name){
        if (className instanceof Class){
            for(let i = 0;i < className.Students.length;i++){
                if(className.Students[i].name == name){
                    console.log(className.Students[i]);
                }
                
        }
    }
    }
}


let student1 = new Student (1,"Minh",18,"2016-2020")
let student2 = new Student (2,"Vu",16,"2002-2006")
let student3 = new Student (3,"Tri",16,"2003-2007")
let student4 = new Student (4,"Nam",16,"2000-2004") 
let student5 = new Student (5,"Vu",16,"2001-2005")
let student6 = new Student (6,"Tri",16,"2010-2012")
let student7 = new Student (7,"Tri",16,"2012-2015") 
let student8 = new Student (8,"Nam",16,"2007-2011")  
let student9 = new Student (9,"Duc",16,"2002-2006")
let student10 = new Student (10,"Manh",16,"2003-2007")


let teacher1 = new Teacher (1,"Quang",30,"Master")
let teacher2 = new Teacher (2,"Nhat",25,"Bachelor")
let teacher3 = new Teacher (3,"Nam",25,"Doctor")
let teacher4 = new Teacher (4,"Anh",25,"Bachelor")
let teacher5 = new Teacher (5,"Nhan",25,"Master")
let teacher6 = new Teacher (6,"Hung",25,"Bachelor")


let class1 = new Class(1,"Math",teacher1, [student1 , student2 , student5 , student7, student9])
let class2 = new Class(2,"History", teacher2,[student10,student8,student6,student4,student3])
let class3 = new Class(3,"IT", teacher3, [student10,student8,student6,student4,student3]) //nam
let class4 = new Class(4,"Physic", teacher5, [student10,student8,student6,student4,student3])
let class5 = new Class(5,"Biology", teacher4, [student10,student8,student6,student4,student3])
let class6 = new Class(6,"Math", teacher6, [student10,student7,student6,student4,student3]) // Tri

console.log(class1.Students[2]);

let newStudent = new Class()
newStudent.addClass([class1,class2,class3,class4,class5,class6])
console.log(newStudent);
newStudent.addStudent(class2,student2)

newStudent.removeStudent(class1,student5)


newStudent.editStudent(class4,student10,"name","Minh")

newStudent.readStudent(class5)

newStudent.readTeacher (class6)

newStudent.findStudent( class4,3)


newStudent.findStudentName(class3, "Nam")
newStudent.findStudentName(class6, "Tri")



