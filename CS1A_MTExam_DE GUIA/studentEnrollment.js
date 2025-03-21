let dsa = [];
let webDev = [];
let subject; // Declare subject before assigning

// prompt user to choose an operation
let subjectChoice = prompt("Select a subject: (A) DSA, (B) WebDev: ");


while (true) {
    // Assign selected subject
    if (subjectChoice === "A") {
        subject = dsa;
    } else if (subjectChoice === "B") {
        subject = webDev;
    } else {
        alert("Invalid choice. Try again.");
        subjectChoice = prompt("Select a subject: (A) DSA, (B) WebDev: ");
        continue;
    }

    // Prompt user to choose an operation
    let operation = prompt("Choose an operation: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit: ");

    // Enroll
    if (operation === "A") {
        let student = prompt("Enter student name to enroll: "); // Enter the name to enroll
        subject.push(student); // push the name of student in the subject
    } // unenroll
    else if (operation === "B") {
        alert("Currently enrolled: " + subject.join(", "));
        let student = prompt("Enter student name to unenroll: ");
        let index = subject.indexOf(student);
        if (index !== -1) {
            subject.splice(index, 1);
        } else {
            alert("Student not found.");
        }
    } // select another subject
    else if (operation === "C") {
        subjectChoice = prompt("Select a subject: (A) DSA, (B) WebDev:");
    } // Exit
    else if (operation === "D") {
        console.log("DSA students:", dsa);
        console.log("WebDev students:", webDev);
        break;
    } 
    else {
        alert("Invalid option. Try again.");
    }
}
