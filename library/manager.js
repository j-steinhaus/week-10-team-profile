const Employee = require("./employee");

class Manager extends employee {
  constructor(name, email, id, companyNumber) {
    super(name, id, email);
    this.companyNumber = companyNumber;
  }

  //   role
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
