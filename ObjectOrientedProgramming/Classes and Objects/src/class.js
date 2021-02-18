var Employee = /** @class */ (function () {
    function Employee(employeeCode, employeeName) {
        this.employeeName = employeeName;
        this.employeeCode = employeeCode;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
