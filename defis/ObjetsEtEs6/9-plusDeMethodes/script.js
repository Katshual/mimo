const employee = {
  firstName: "Amanda",
  secondName: "Jimenez",
  fullName: function () {
    return `${this.firstName + " " + this.secondName}`;
  },
};
console.log(employee.fullName());
