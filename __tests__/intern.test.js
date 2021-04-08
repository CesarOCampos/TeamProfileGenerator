const Intern = require("./intern.js");

describe("Intern constructor ", () => {
    describe("", () => {

        it("can be an instance of the Intern Class", () => {
            expect(typeof new Intern()).toBe("object");
        })

        it("should have a name, id and email", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "employee@test.com";
            const newIntern = new Intern(empId, empName, empEmail);

            expect(newIntern.empName).toBe(empName);
            expect(newIntern.empId).toBe(empId);
            expect(newIntern.empEmail).toBe(empEmail);
        })
    })

    describe("getName function", () => {
        it("should retrieve the name value of each instance of an employee", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "employee@test.com";
            const newIntern = new Intern(empId, empName, empEmail);

            expect(newIntern.getName()).toBe(empName);
        })
    })

    describe("getId function", () => {
        it("Should retrieve the value of the empId of an Intern instance", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newIntern = new Intern(empName, empId, empEmail);

            expect(newIntern.getId()).toBe(empId);
        })
    })

    describe("getEmail function", () => {
        it("Should retrieve the value of the empEmail of an Intern instance", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newIntern = new Intern(empName, empId, empEmail);

            expect(newIntern.getEmail()).toBe(empEmail);
        })
    })

    describe("getRole function", () => {
        it("Should retrieve the employee's position (Intern)", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newIntern = new Intern(empName, empId, empEmail);

            expect(newIntern.getRole()).toBe("Intern");
        })
    })
})