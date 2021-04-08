const Engineer = require("./engineer.js");

describe("Engineer constructor ", () => {
    describe("", () => {

        it("can be an instance of the Engineer Class", () => {
            expect(typeof new Engineer()).toBe("object");
        })

        it("should have a name, id and email", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "Engineer@test.com";
            const newEngineer = new Engineer(empId, empName, empEmail);

            expect(newEngineer.empName).toBe(empName);
            expect(newEngineer.empId).toBe(empId);
            expect(newEngineer.empEmail).toBe(empEmail);
        })
    })

    describe("getName function", () => {
        it("should retrieve the name value of each instance of an Engineer", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "Engineer@test.com";
            const newEngineer = new Engineer(empId, empName, empEmail);

            expect(newEngineer.getName()).toBe(empName);
        })
    })

    describe("getId function", () => {
        it("Should retrieve the value of the empId of an Engineer instance", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newEngineer = new Engineer(empName, empId, empEmail);

            expect(newEngineer.getId()).toBe(empId);
        })
    })

    describe("getEmail function", () => {
        it("Should retrieve the value of the empEmail of an Engineer instance", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newEngineer = new Engineer(empName, empId, empEmail);

            expect(newEngineer.getEmail()).toBe(empEmail);
        })
    })

    describe("getRole function", () => {
        it("Should retrieve the Engineer's position (Engineer)", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newEngineer = new Engineer(empName, empId, empEmail);

            expect(newEngineer.getRole()).toBe("Engineer");
        })
    })
})