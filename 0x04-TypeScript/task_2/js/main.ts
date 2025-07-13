interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}
interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}
class Director implements DirectorInterface {
    workFromHome() { return "Working from home"; }
    getCoffeeBreak() { return "Getting a coffee break"; }
    workDirectorTasks() { return "Getting to director tasks"; }

}
class Teacher implements TeacherInterface {
    workFromHome() { return "Cannot work from home"; }
    getCoffeeBreak() { return "Cannot have a break"; }
    workTeacherTasks() { return "Getting to work"; }
}
const createEmployee = (salary: number | string): Teacher | Director => {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher()
    } else {
        return new Director()
    }
}
// type guard to check if the employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// function to execute work based on type of employee
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) return employee.workDirectorTasks();
    return (employee as Teacher).workTeacherTasks();
}
