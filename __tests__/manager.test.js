const Manager = require("./manager.js"); //need to make it as not made
//{id: name: email:}
describe("Manager constructor ", () => {
    describe("", () => {

        it("can be an instance of the Manager Class", () => {
            expect(typeof new Manager()).toBe("object");
        })

        it("should have a name, id and email", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "Manager@test.com";
            const newManager = new Manager(empId, empName, empEmail);

            expect(newManager.empName).toBe(empName);
            expect(newManager.empId).toBe(empId);
            expect(newManager.empEmail).toBe(empEmail);
        })
    })

    describe("getName function", () => {
        it("should retrieve the name value of each instance of an Manager", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "Manager@test.com";
            const newManager = new Manager(empId, empName, empEmail);

            expect(newManager.getName()).toBe(empName);
        })
    })

    describe("getId function", () => {
        it("Should retrieve the value of the empId of an Manager instance", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newManager = new Manager(empName, empId, empEmail);

            expect(newManager.getId()).toBe(empId);
        })
    })

    describe("getEmail function", () => {
        it("Should retrieve the value of the empEmail of an Manager instance", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newManager = new Manager(empName, empId, empEmail);

            expect(newManager.getEmail()).toBe(empEmail);
        })
    })

    describe("getRole function", () => {
        it("Should retrieve the Manager's position (Manager)", () => {
            const empName = "cesar";
            const empId = 1;
            const empEmail = "test@test.com";
            const newManager = new Manager(empName, empId, empEmail);

            expect(newManager.getRole()).toBe("Manager");
        })
    })
})