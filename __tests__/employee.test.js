const Employee = require("./Employee.js"); //need to make it as not made
//{id: name: email:}
describe("Employee constructor ", () => {
    describe("", () => {

        it("can be an instance of the EMployee Class", () => {
            expect(typeof new Employee()).toBe("object");
        })

        it("should have a name property", () => {
            const EMPName = "cesar";
            const EMPId = 1;
            const EMPEmail = "employee@test.com";
            const newEmployee = new Employee(EMPId, EMPName, EMPEmail)

            expect(newEmployee.EMPName).toBe(EMPName)
            expect(newEmployee.EMPId).toBe(EMPId)
            expect(newEmployee.EMPEmail).toBe(EMPEmail)
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