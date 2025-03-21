// Collect user information using prompt()
let subjectTitle = prompt("Enter your Subject Title: ")
let classSchedule = prompt("Enter your Class Schedule(Time and Days): ")
let classroom = prompt("Enter your Classroom: ")
let classInstructor = prompt("Enter your Class Instructor: ") 
let studentName = prompt("Enter Student Name: ")

// Format and display the collected information
let information = `${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`
console.log(information)