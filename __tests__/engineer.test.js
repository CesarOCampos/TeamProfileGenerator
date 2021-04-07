const Employee = require("./Employee.js"); //need to make it as not made
//{id: name: email:}
describe("Employee constructor ", () => {
    describe("", () => {

        it("can be an instance of the Employee Class", () => {
            expect(typeof new Employee()).toBe("object");
        })

        it("should have a name property", () => {
            const name = "cesar";
            const newEmployee = new Employee(1, name, "email@email.com")

            expect(newEmployee.name).toBe(name)
        })
    })

    describe("getName function", () => {
        it("should retrieve the name propertys value of each instance of an employee", () => {
            const name = "cesar";
            const newEmployee = new Employee(1, name, "email@email.com")

            expect(newEmployee.getName()).toBe(name)
        })
    })
})