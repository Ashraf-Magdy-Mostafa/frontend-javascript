// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 24,
    location: "San Francisco"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the students table
function renderStudentsTable(students: Student[]): void {
    // Create table element
    const table: HTMLTableElement = document.createElement("table");

    // Create table header row
    const headerRow: HTMLTableRowElement = document.createElement("tr");
    const headers: string[] = ["First Name", "Location"];
    headers.forEach((headerText) => {
        const th: HTMLTableCellElement = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create a row for each student
    students.forEach((student) => {
        const row: HTMLTableRowElement = document.createElement("tr");

        // First Name cell
        const firstNameCell: HTMLTableCellElement = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        // Location cell
        const locationCell: HTMLTableCellElement = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        table.appendChild(row);
    });

    // Append the table to the document body 
    document.body.appendChild(table);
}

// Call the function to render the table
renderStudentsTable(studentsList);
