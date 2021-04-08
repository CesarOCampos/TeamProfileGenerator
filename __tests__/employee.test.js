const Employee = require("./employee.js");

describe("Employee constructor ", () => {
    describe("", () => {

        it("can be an instance of the Employee Class", () => {
            expect(typeof new Employee()).toBe("object");
        })

        it("should have a name, id and email", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "employee@test.com";
            const newEmployee = new Employee(empId, empName, empEmail);

            expect(newEmployee.empName).toBe(empName);
            expect(newEmployee.empId).toBe(empId);
            expect(newEmployee.empEmail).toBe(empEmail);
        })
    })

    describe("getName function", () => {
        it("should retrieve the name value of each instance of an employee", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "employee@test.com";
            const newEmployee = new Employee(empId, empName, empEmail);

            expect(newEmployee.getName()).toBe(empName);
        })
    })

    describe("getId function", () => {
        it("Should retrieve the value of the empId of an Employee instance", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newEmployee = new Employee(empName, empId, empEmail);

            expect(newEmployee.getId()).toBe(empId);
        })
    })

    describe("getEmail function", () => {
        it("Should retrieve the value of the empEmail of an Employee instance", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newEmployee = new Employee(empName, empId, empEmail);

            expect(newEmployee.getEmail()).toBe(empEmail);
        })
    })

    describe("getRole function", () => {
        it("Should retrieve the employee's position (Employee)", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newEmployee = new Employee(empName, empId, empEmail);

            expect(newEmployee.getRole()).toBe("Employee");
        })
    })
})