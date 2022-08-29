const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  //   github
  getGitHub() {
    return this.github;
  }

  //   role
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
