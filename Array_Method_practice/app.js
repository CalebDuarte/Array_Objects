// ---------------- EMPLOYEE DATA ----------------
const employees = [
  {
    id: 101,
    name: "Sarah Johnson",
    department: "Engineering",
    position: "Senior Developer",
    primarySkill: "JavaScript",
    salary: 95000,
    yearsOfExperience: 6,
    isRemote: true,
    email: "sarah.johnson@company.com"
  },
  {
    id: 102,
    name: "Michael Chen",
    department: "Engineering",
    position: "Junior Developer",
    primarySkill: "Python",
    salary: 65000,
    yearsOfExperience: 2,
    isRemote: false,
    email: "michael.chen@company.com"
  },
  {
    id: 103,
    name: "Emily Rodriguez",
    department: "Marketing",
    position: "Marketing Manager",
    primarySkill: "SEO",
    salary: 78000,
    yearsOfExperience: 5,
    isRemote: true,
    email: "emily.rodriguez@company.com"
  },
  {
    id: 104,
    name: "David Kim",
    department: "Engineering",
    position: "DevOps Engineer",
    primarySkill: "Docker",
    salary: 92000,
    yearsOfExperience: 7,
    isRemote: true,
    email: "david.kim@company.com"
  },
  {
    id: 105,
    name: "Lisa Anderson",
    department: "Sales",
    position: "Sales Representative",
    primarySkill: "Negotiation",
    salary: 72000,
    yearsOfExperience: 4,
    isRemote: false,
    email: "lisa.anderson@company.com"
  },
  {
    id: 106,
    name: "James Wilson",
    department: "Engineering",
    position: "Senior Developer",
    primarySkill: "Java",
    salary: 98000,
    yearsOfExperience: 8,
    isRemote: true,
    email: "james.wilson@company.com"
  },
  {
    id: 107,
    name: "Rachel Green",
    department: "Engineering",
    position: "Frontend Developer",
    primarySkill: "JavaScript",
    salary: 88000,
    yearsOfExperience: 5,
    isRemote: true,
    email: "rachel.green@company.com"
  }
];

// ---------------- SIMPLE HELPERS ----------------
function clearGrid() {
  document.getElementById("employeesGrid").innerHTML = "";
}

function updateFilterInfo(text) {
  document.getElementById("filterInfo").innerHTML = `<strong>Showing:</strong> ${text}`;
}

function showWelcome() {
  const grid = document.getElementById("employeesGrid");
  let html = "";

  html += `
    <div class="welcome-box">
      <h2>👈 Click a question on the sidebar</h2>
      <p>Employees only show when a question needs them.</p>
    </div>
  `;

  grid.innerHTML = html;
  updateFilterInfo("Welcome");
}

// ---------------- SHOW ALL ----------------
function showAllEmployees() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  let html = "";

  employees.forEach(function(emp) {
    html += `
      <div class="employee-card">
        <h3>${emp.name}</h3>
        <p>📧 ${emp.email}</p>
        <p>🏢 ${emp.department}</p>
        <p>💼 ${emp.position}</p>
        <p>🛠️ ${emp.primarySkill}</p>
        <p>💰 $${emp.salary.toLocaleString()}</p>
        <p>📅 ${emp.yearsOfExperience} years experience</p>
        <span class="badge">${emp.isRemote ? "🏠 Remote" : "🏢 Office"}</span>
      </div>
    `;
  });

  grid.innerHTML = html;
  updateFilterInfo(`All Employees (${employees.length})`);
}

// ---------------- QUESTIONS ----------------

// Q1: includes()
function question1() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const departments = employees.map(function(emp) {
    return emp.department;
  });

  const result = departments.includes("Marketing");

  let html = "";
  html += `
    <div class="result-box">
      <h2>Q1: includes()</h2>
      <p>Does 'Marketing' department exist? <strong>${result}</strong></p>
      <p style="font-size: 1em; margin-top: 10px; color: #ccc;">
        Departments: ${departments.join(", ")}
      </p>
    </div>
  `;

  grid.innerHTML = html;
  updateFilterInfo("Q1: includes()");
}

// Q2: indexOf()
function question2() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const names = employees.map(function(emp) {
    return emp.name;
  });

  const index = names.indexOf("David Kim");
  const emp = employees[index];

  let html = "";
  html += `
    <div class="result-box">
      <h2>Q2: indexOf()</h2>
      <p>David Kim index: <strong>${index}</strong></p>
    </div>
  `;

  if (emp) {
    html += `
      <div class="employee-card">
        <h3>${emp.name}</h3>
        <p>📧 ${emp.email}</p>
        <p>🏢 ${emp.department}</p>
        <p>💼 ${emp.position}</p>
        <p>🛠️ ${emp.primarySkill}</p>
        <p>💰 $${emp.salary.toLocaleString()}</p>
        <p>📅 ${emp.yearsOfExperience} years experience</p>
        <span class="badge">${emp.isRemote ? "🏠 Remote" : "🏢 Office"}</span>
      </div>
    `;
  }

  grid.innerHTML = html;
  updateFilterInfo("Q2: indexOf()");
}

// Q3: find()
function question3() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const result = employees.find(function(emp) {
    return emp.department === "Marketing";
  });

  let html = "";
  html += `
    <div class="result-box">
      <h2>Q3: find()</h2>
      <p>First Marketing employee: <strong>${result ? result.name : "None"}</strong></p>
    </div>
  `;

  if (result) {
    html += `
      <div class="employee-card">
        <h3>${result.name}</h3>
        <p>📧 ${result.email}</p>
        <p>🏢 ${result.department}</p>
        <p>💼 ${result.position}</p>
        <p>🛠️ ${result.primarySkill}</p>
        <p>💰 $${result.salary.toLocaleString()}</p>
        <p>📅 ${result.yearsOfExperience} years experience</p>
        <span class="badge">${result.isRemote ? "🏠 Remote" : "🏢 Office"}</span>
      </div>
    `;
  }

  grid.innerHTML = html;
  updateFilterInfo("Q3: find()");
}

// Q4: findIndex()
function question4() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const index = employees.findIndex(function(emp) {
    return emp.id === 104;
  });

  let html = "";
  html += `
    <div class="result-box">
      <h2>Q4: findIndex()</h2>
      <p>Employee ID 104 index: <strong>${index}</strong></p>
    </div>
  `;

  if (index !== -1) {
    const emp = employees[index];
    html += `
      <div class="employee-card">
        <h3>${emp.name}</h3>
        <p>📧 ${emp.email}</p>
        <p>🏢 ${emp.department}</p>
        <p>💼 ${emp.position}</p>
        <p>🛠️ ${emp.primarySkill}</p>
        <p>💰 $${emp.salary.toLocaleString()}</p>
        <p>📅 ${emp.yearsOfExperience} years experience</p>
        <span class="badge">${emp.isRemote ? "🏠 Remote" : "🏢 Office"}</span>
      </div>
    `;
  }

  grid.innerHTML = html;
  updateFilterInfo("Q4: findIndex()");
}

// Q5: some()
function question5() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const answer = employees.some(function(emp) {
    return emp.yearsOfExperience > 7;
  });

  const matches = employees.filter(function(emp) {
    return emp.yearsOfExperience > 7;
  });

  let html = "";
  html += `
    <div class="result-box">
      <h2>Q5: some()</h2>
      <p>Any employees with > 7 years experience? <strong>${answer}</strong></p>
      <p style="font-size: 1em; margin-top: 10px; color: #ccc;">
        Found ${matches.length} employee(s)
      </p>
    </div>
  `;

  matches.forEach(function(emp) {
    html += `
      <div class="employee-card">
        <h3>${emp.name}</h3>
        <p>📧 ${emp.email}</p>
        <p>🏢 ${emp.department}</p>
        <p>💼 ${emp.position}</p>
        <p>🛠️ ${emp.primarySkill}</p>
        <p>💰 $${emp.salary.toLocaleString()}</p>
        <p>📅 ${emp.yearsOfExperience} years experience</p>
        <span class="badge">${emp.isRemote ? "🏠 Remote" : "🏢 Office"}</span>
      </div>
    `;
  });

  grid.innerHTML = html;
  updateFilterInfo("Q5: some()");
}

// Q6: every()
function question6() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const engineering = employees.filter(function(emp) {
    return emp.department === "Engineering";
  });

  const result = engineering.every(function(emp) {
    return emp.isRemote === true;
  });

  let html = "";
  html += `
    <div class="result-box">
      <h2>Q6: every()</h2>
      <p>Are all Engineering employees remote? <strong>${result}</strong></p>
    </div>
  `;

  grid.innerHTML = html;
  updateFilterInfo("Q6: every()");
}

// Q7: filter()
function question7() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const result = employees.filter(function(emp) {
    return emp.isRemote === true && emp.salary > 80000;
  });

  let html = "";
  html += `
    <div class="result-box">
      <h2>Q7: filter()</h2>
      <p>Remote employees earning > $80,000: <strong>${result.length} found</strong></p>
    </div>
  `;

  result.forEach(function(emp) {
    html += `
      <div class="employee-card">
        <h3>${emp.name}</h3>
        <p>📧 ${emp.email}</p>
        <p>🏢 ${emp.department}</p>
        <p>💼 ${emp.position}</p>
        <p>🛠️ ${emp.primarySkill}</p>
        <p>💰 $${emp.salary.toLocaleString()}</p>
        <p>📅 ${emp.yearsOfExperience} years experience</p>
        <span class="badge">${emp.isRemote ? "🏠 Remote" : "🏢 Office"}</span>
      </div>
    `;
  });

  grid.innerHTML = html;
  updateFilterInfo("Q7: filter()");
}

// Q8: map()
function question8() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const result = employees.map(function(emp) {
    return { name: emp.name, email: emp.email };
  });

  let html = "";
  html += `
    <div class="result-box">
      <h2>Q8: map()</h2>
      <p>Mapped to Name & Email only: <strong>${result.length} employees</strong></p>
    </div>
  `;

  result.forEach(function(emp) {
    html += `
      <div class="employee-card minimal">
        <h3>${emp.name}</h3>
        <p>📧 ${emp.email}</p>
      </div>
    `;
  });

  grid.innerHTML = html;
  updateFilterInfo("Q8: map()");
}

// Q9: join()
function question9() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const departments = employees.map(function(emp) {
    return emp.department;
  });

  const uniqueDepartments = departments.filter(function(dep, index) {
    return departments.indexOf(dep) === index;
  });

  const result = uniqueDepartments.join(", ");

  let html = "";
  html += `
    <div class="result-box">
      <h2>Q9: join()</h2>
      <p>Unique departments joined: <strong>${result}</strong></p>
    </div>
  `;

  grid.innerHTML = html;
  updateFilterInfo("Q9: join()");
}

// Q10: concat()
function question10() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const newHires = [
    {
      id: 108,
      name: "Anna Taylor",
      department: "HR",
      position: "HR Specialist",
      primarySkill: "Recruitment",
      salary: 68000,
      yearsOfExperience: 3,
      isRemote: false,
      email: "anna.taylor@company.com"
    },
    {
      id: 109,
      name: "Tom Brooks",
      department: "Engineering",
      position: "Backend Developer",
      primarySkill: "Node.js",
      salary: 85000,
      yearsOfExperience: 4,
      isRemote: true,
      email: "tom.brooks@company.com"
    }
  ];

  const combined = employees.concat(newHires);

  let html = "";
  html += `
    <div class="result-box">
      <h2>Q10: concat()</h2>
      <p>Total employees after adding new hires: <strong>${combined.length}</strong></p>
      <p style="font-size: 1em; margin-top: 10px; color: #ccc;">
        Original: ${employees.length} + New hires: ${newHires.length}
      </p>
    </div>
  `;

  combined.forEach(function(emp) {
    html += `
      <div class="employee-card">
        <h3>${emp.name}</h3>
        <p>📧 ${emp.email}</p>
        <p>🏢 ${emp.department}</p>
        <p>💼 ${emp.position}</p>
        <p>🛠️ ${emp.primarySkill}</p>
        <p>💰 $${emp.salary.toLocaleString()}</p>
        <p>📅 ${emp.yearsOfExperience} years experience</p>
        <span class="badge">${emp.isRemote ? "🏠 Remote" : "🏢 Office"}</span>
      </div>
    `;
  });

  grid.innerHTML = html;
  updateFilterInfo("Q10: concat()");
}

// Bonus 1
function bonus1() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const filtered = employees.filter(function(emp) {
    return emp.primarySkill === "JavaScript";
  });

  const result = filtered.map(function(emp) {
    return emp.name;
  }).join(", ");

  let html = "";
  html += `
    <div class="result-box">
      <h2>Bonus 1</h2>
      <p>JavaScript developers: <strong>${result}</strong></p>
    </div>
  `;

  filtered.forEach(function(emp) {
    html += `
      <div class="employee-card">
        <h3>${emp.name}</h3>
        <p>📧 ${emp.email}</p>
        <p>🏢 ${emp.department}</p>
        <p>💼 ${emp.position}</p>
        <p>🛠️ ${emp.primarySkill}</p>
        <p>💰 $${emp.salary.toLocaleString()}</p>
        <p>📅 ${emp.yearsOfExperience} years experience</p>
        <span class="badge">${emp.isRemote ? "🏠 Remote" : "🏢 Office"}</span>
      </div>
    `;
  });

  grid.innerHTML = html;
  updateFilterInfo("Bonus 1");
}

// Bonus 2
function bonus2() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const remoteEmployees = employees.filter(function(emp) {
    return emp.isRemote === true;
  });

  const result = remoteEmployees.every(function(emp) {
    return emp.yearsOfExperience >= 4;
  });

  let html = "";
  html += `
    <div class="result-box">
      <h2>Bonus 2</h2>
      <p>Do all remote employees have 4+ years experience? <strong>${result}</strong></p>
    </div>
  `;

  remoteEmployees.forEach(function(emp) {
    html += `
      <div class="employee-card">
        <h3>${emp.name}</h3>
        <p>📧 ${emp.email}</p>
        <p>🏢 ${emp.department}</p>
        <p>💼 ${emp.position}</p>
        <p>🛠️ ${emp.primarySkill}</p>
        <p>💰 $${emp.salary.toLocaleString()}</p>
        <p>📅 ${emp.yearsOfExperience} years experience</p>
        <span class="badge">${emp.isRemote ? "🏠 Remote" : "🏢 Office"}</span>
      </div>
    `;
  });

  grid.innerHTML = html;
  updateFilterInfo("Bonus 2");
}

// Bonus 3
function bonus3() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const allSkills = employees.map(function(emp) {
    return emp.primarySkill;
  });

  const result = allSkills.filter(function(skill, index) {
    return allSkills.indexOf(skill) === index;
  });

  let html = "";
  html += `
    <div class="result-box">
      <h2>Bonus 3</h2>
      <p>Unique skills: <strong>${result.join(", ")}</strong></p>
    </div>
  `;

  grid.innerHTML = html;
  updateFilterInfo("Bonus 3");
}

// Bonus 4
function bonus4() {
  clearGrid();
  const grid = document.getElementById("employeesGrid");

  const engineeringEmps = employees.filter(function(emp) {
    return emp.department === "Engineering";
  });

  let totalSalary = 0;
  for (let i = 0; i < engineeringEmps.length; i++) {
    totalSalary += engineeringEmps[i].salary;
  }

  let html = "";
  html += `
    <div class="result-box">
      <h2>Bonus 4</h2>
      <h3 style="font-size: 2.5em; margin: 15px 0;">$${totalSalary.toLocaleString()}</h3>
      <p>Engineering Department Total Salary</p>
      <p style="font-size: 1em; margin-top: 10px; color: #ccc;">
        ${engineeringEmps.length} employees | Average: $${Math.round(totalSalary / engineeringEmps.length).toLocaleString()}
      </p>
    </div>
  `;

  engineeringEmps.forEach(function(emp) {
    html += `
      <div class="employee-card">
        <h3>${emp.name}</h3>
        <p>📧 ${emp.email}</p>
        <p>🏢 ${emp.department}</p>
        <p>💼 ${emp.position}</p>
        <p>🛠️ ${emp.primarySkill}</p>
        <p>💰 $${emp.salary.toLocaleString()}</p>
        <p>📅 ${emp.yearsOfExperience} years experience</p>
        <span class="badge">${emp.isRemote ? "🏠 Remote" : "🏢 Office"}</span>
      </div>
    `;
  });

  grid.innerHTML = html;
  updateFilterInfo("Bonus 4");
}

// Start page
showWelcome();
