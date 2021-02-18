class Employee{
    employeeName : string;
    employeeCode : number;

    constructor(employeeCode : number, employeeName : string){
        this.employeeName = employeeName;
        this.employeeCode = employeeCode;
    }

    getSalary() : number {
        return 10000;
    }
}