//Teacher interface with readonly properties and optional attributes
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attribute: string]: any;
}

// Director interface extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}



// Example usage of the Teacher interface
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

// Example usage of the Directors interface
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}
// normal typescript function declaration
// function printTeacherFunction(firstName: string, lastName: string): string {
//     return `${firstName[0]}.${lastName}`
// }
const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName[0]}.${lastName}`;

// class StudentClass {
//     firstName: string;
//     lastName: string;
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
//     workOnHomework(): string {
//         return 'Currently working'
//     }
//     displayName(): string {
//         return this.firstName;
//     }
// }

// class student constructor
interface StudentConstructor {
    new(firstName: string, lastName: string): StudentInterface;
}
// class student interface
interface StudentInterface {
    workOnHomework(): string
    displayName(): string
}
// class student
class StudentClass implements StudentInterface {
    private firstName: string;
    private lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working'
    }
    displayName(): string {
        return this.firstName;
    }

}