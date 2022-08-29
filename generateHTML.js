const createManager = function (manager) {
  return `
<div class="col-4 mt-4 border">
    <div class="card-header text-bg-dark mb-3" style="max-width: auto;">
        <h2 class="text-center">${manager.name}</h2>
        <h3 class="card-title text-center">Manager</h3>
    </div>
    <div class="card-body">
        <p class="card-text text-center">ID: ${manager.id} </p>
        <p class="card-text text-center">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="card-text text-center">Comapny Number: ${manager.companyNumber}</p>
    </div>
</div>
    `;
};

const createIntern = function (intern) {
  return `
<div class="col-4 mt-4 border">
    <div class="card-header text-bg-dark mb-3" style="max-width: auto;">
        <h2 class="text-center">${intern.name}</h2>
        <h3 class="card-title text-center">Intern</h3>
    </div>
    <div class="card-body">
        <p class="card-text text-center">ID: ${intern.id} </p>
        <p class="card-text text-center">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="card-text text-center">School: ${intern.school}</p>
    </div>
</div>
    `;
};

const createEngineer = function (engineer) {
  return `
<div class="col-4 mt-4 border">
    <div class="card-header text-bg-dark mb-3" style="max-width: auto;">
        <h2 class="text-center">${engineer.name}</h2>
        <h3 class="card-title text-center">Engineer</h3>
    </div>
    <div class="card-body">
        <p class="card-text text-center">ID: ${engineer.id} </p>
        <p class="card-text text-center">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="card-text text-center">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
</div>
    `;
};

generateHTML = function (team) {
  let myTeam = [];

  for (let i = 0; i < team.length; i++) {
    const employee = team[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerInfo = createManager(employee);

      myTeam.push(managerInfo);
    }
    if (role === "Intern") {
      const internInfo = createIntern(employee);

      myTeam.push(internInfo);
    }
    if (role === "Engineer") {
      const engineerInfo = createEngineer(employee);

      myTeam.push(engineerInfo);
    }
  }
  //return createMyTeam(myTeam);
  const teamInfo = myTeam.join("");

  const generateTeam = createMyTeam(teamInfo);
  return generateTeam;
  //return createMyTeam(myTeam);
};

const createMyTeam = function (teamInfo) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    
</head>
<body>
    <header class="navbar navbar-dark bg-dark">
        <h1 class="text-center navbar-brand mb-0 h1 w-100 fs-1">My Team</h1>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">
            <!--Team Profiles-->
            ${teamInfo}
            </div>
        </div>
    </main>
    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>
    `;
};

module.exports = generateHTML;
