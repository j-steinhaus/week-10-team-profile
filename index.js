//generate webpage that displays team's basic info
//access to emails and GitHub profiles
//html file generates to display a nicely formatted team roster based on input

const fs = require("fs");
const inquirer = require("inquirer");

// team profiles
const Manager = require(".library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");

const generateHTML = require("./src/generateHTML");

const teamArray = [];

const addingEmployee = () => {
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Engineer", "Manager", "Intern", "Done adding employees"],
      },
    ])
    .then((answers) => {
      const userRole = answers.role;

      console.log(userRole);
      if (userRole == "Manager") {
        addingManager();
      }
      if (userRole == "Engineer") {
        addingEngineer();
      }
      if (userRole == "Intern") {
        addingIntern();
      }
      if (userRole == "Done adding employees") {
        generateTeam();
      }
      if (
        userRole == "Manager" &&
        userRole == "Engineer" &&
        userRole == "Intern"
      ) {
        addingManager();
        addingEngineer();
        addingIntern();
      }
    });
};

const addingManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Managers name that is in charge of this team",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            return "Please enter a name";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's ID number?",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            return "Please enter a valid ID number";
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            return "Please enter an email";
          }
        },
      },
      {
        type: "input",
        name: "companyNumber",
        message: "What is the manager's company number?",
        validate: (companyNumber) => {
          if (companyNumber) {
            return true;
          } else {
            return "Please enter an company number";
          }
        },
      },
    ])
    .then((answers) => {
      const { name, id, email, companyNumber } = answers;
      teamArray.push(new Manager(name, id, email, companyNumber));
      addingEmployee();
    });
};
const addingEnginner = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please provide the name of the Engineer",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            return "Please enter a name";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's ID number?",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            return "Please enter a valid ID number";
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            return "Please enter an email";
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please provide the Engineer's github",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            return "Please enter a github username";
          }
        },
      },
    ])
    .then((answers) => {
      const { name, id, email, github } = answers;
      teamArray.push(new Engineer(name, id, email, github));
      addingEmployee();
    });
};

const addingIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please provide the name of the intern",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            return "Please enter a name";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's ID number?",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            return "Please enter a valid ID number";
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the Interns's email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            return "Please enter an email";
          }
        },
      },
      {
        type: "input",
        name: "school",
        message:
          "Please provide the name of the school where the Intern is graduating from",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            return "Please enter an school name";
          }
        },
      },
    ])
    .then((answers) => {
      const { name, id, email, s } = answers;
      teamArray.push(new Intern(name, id, email, school));
      addingEmployee();
    });
};

const createProfile = (datat) => {
  fs.writeFile("./visual/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been created in an index.html file!");
    }
  });
};

const generateTeam = () => {
  console.log(teamArray);
  const html = generateHTML(teamArray);
  createProfile(html);
};

addingEmployee();
