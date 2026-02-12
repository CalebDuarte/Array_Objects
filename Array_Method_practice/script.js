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

        // Question 1: includes()
        function question1() {
            const departmentsList = employees.map(emp => emp.department);
            const result = departmentsList.includes("Marketing");
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Q1: includes()</h2>
                    <p>Does 'Marketing' department exist? <strong>${result}</strong></p>
                    <p style="font-size: 1em; margin-top: 15px; color: #ccc;">
                        Departments list: ${departmentsList.join(", ")}
                    </p>
                </div>
            `;
            updateFilterInfo("Q1: includes() - Marketing department exists: " + result);
        }

        // Question 2: indexOf()
        function question2() {
            const employeeNames = employees.map(emp => emp.name);
            const result = employeeNames.indexOf("David Kim");
            const employeeAtIndex = employees[result];
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Q2: indexOf()</h2>
                    <p>David Kim is at index: <strong>${result}</strong></p>
                </div>
            `;
            if (employeeAtIndex) {
                grid.innerHTML += `
                    <div class="employee-card">
                        <h3>${employeeAtIndex.name}</h3>
                        <p>📧 ${employeeAtIndex.email}</p>
                        <p>🏢 ${employeeAtIndex.department}</p>
                        <p>💼 ${employeeAtIndex.position}</p>
                        <p>🛠️ ${employeeAtIndex.primarySkill}</p>
                        <p>💰 $${employeeAtIndex.salary.toLocaleString()}</p>
                        <p>📅 ${employeeAtIndex.yearsOfExperience} years experience</p>
                        <span class="badge">${employeeAtIndex.isRemote ? '🏠 Remote' : '🏢 Office'}</span>
                    </div>
                `;
            }
            updateFilterInfo("Q2: indexOf() - David Kim found at index: " + result);
        }

        // Question 3: find()
        function question3() {
            const result = employees.find(emp => emp.department === "Marketing");
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Q3: find()</h2>
                    <p>First Marketing employee found: <strong>${result.name}</strong></p>
                </div>
            `;
            if (result) {
                grid.innerHTML += `
                    <div class="employee-card">
                        <h3>${result.name}</h3>
                        <p>📧 ${result.email}</p>
                        <p>🏢 ${result.department}</p>
                        <p>💼 ${result.position}</p>
                        <p>🛠️ ${result.primarySkill}</p>
                        <p>💰 $${result.salary.toLocaleString()}</p>
                        <p>📅 ${result.yearsOfExperience} years experience</p>
                        <span class="badge">${result.isRemote ? '🏠 Remote' : '🏢 Office'}</span>
                    </div>
                `;
            }
            updateFilterInfo("Q3: find() - First Marketing employee: " + result.name);
        }

        // Question 4: findIndex()
        function question4() {
            const result = employees.findIndex(emp => emp.id === 104);
            const employeeAtIndex = employees[result];
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Q4: findIndex()</h2>
                    <p>Employee with ID 104 is at index: <strong>${result}</strong></p>
                </div>
            `;
            if (employeeAtIndex) {
                grid.innerHTML += `
                    <div class="employee-card">
                        <h3>${employeeAtIndex.name}</h3>
                        <p>📧 ${employeeAtIndex.email}</p>
                        <p>🏢 ${employeeAtIndex.department}</p>
                        <p>💼 ${employeeAtIndex.position}</p>
                        <p>🛠️ ${employeeAtIndex.primarySkill}</p>
                        <p>💰 $${employeeAtIndex.salary.toLocaleString()}</p>
                        <p>📅 ${employeeAtIndex.yearsOfExperience} years experience</p>
                        <span class="badge">${employeeAtIndex.isRemote ? '🏠 Remote' : '🏢 Office'}</span>
                    </div>
                `;
            }
            updateFilterInfo("Q4: findIndex() - Employee ID 104 at index: " + result);
        }

        // Question 5: some()
        function question5() {
            const result = employees.some(emp => emp.yearsOfExperience > 7);
            const matchingEmployees = employees.filter(emp => emp.yearsOfExperience > 7);
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Q5: some()</h2>
                    <p>Are there any employees with > 7 years experience? <strong>${result}</strong></p>
                    <p style="font-size: 1em; margin-top: 10px; color: #ccc;">Found ${matchingEmployees.length} employee(s)</p>
                </div>
            `;
            grid.innerHTML += matchingEmployees.map(emp => `
                <div class="employee-card">
                    <h3>${emp.name}</h3>
                    <p>📧 ${emp.email}</p>
                    <p>🏢 ${emp.department}</p>
                    <p>💼 ${emp.position}</p>
                    <p>🛠️ ${emp.primarySkill}</p>
                    <p>💰 $${emp.salary.toLocaleString()}</p>
                    <p>📅 ${emp.yearsOfExperience} years experience</p>
                    <span class="badge">${emp.isRemote ? '🏠 Remote' : '🏢 Office'}</span>
                </div>
            `).join('');
            updateFilterInfo("Q5: some() - Employees with > 7 years: " + result);
        }

        // Question 6: every()
        function question6() {
            const engineeringEmployees = employees.filter(emp => emp.department === "Engineering");
            const result = engineeringEmployees.every(emp => emp.isRemote === true);
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Q6: every()</h2>
                    <p>Are all Engineering employees remote? <strong>${result}</strong></p>
                </div>
            `;
            updateFilterInfo("Q6: every() - All Engineering remote: " + result);
        }

        // Question 7: filter()
        function question7() {
            const result = employees.filter(emp => emp.isRemote && emp.salary > 80000);
            currentEmployeeList = result;
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Q7: filter()</h2>
                    <p>Remote employees earning > $80,000: <strong>${result.length} found</strong></p>
                </div>
            `;
            grid.innerHTML += result.map(emp => `
                <div class="employee-card">
                    <h3>${emp.name}</h3>
                    <p>📧 ${emp.email}</p>
                    <p>🏢 ${emp.department}</p>
                    <p>💼 ${emp.position}</p>
                    <p>🛠️ ${emp.primarySkill}</p>
                    <p>💰 $${emp.salary.toLocaleString()}</p>
                    <p>📅 ${emp.yearsOfExperience} years experience</p>
                    <span class="badge">${emp.isRemote ? '🏠 Remote' : '🏢 Office'}</span>
                </div>
            `).join('');
            updateFilterInfo(`Q7: filter() - Remote employees earning > $80,000 (${result.length})`);
        }

        // Question 8: map()
        function question8() {
            const result = employees.map(emp => ({
                name: emp.name,
                email: emp.email
            }));
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Q8: map()</h2>
                    <p>Mapped to Name & Email only: <strong>${result.length} employees</strong></p>
                </div>
            `;
            grid.innerHTML += result.map(emp => `
                <div class="employee-card minimal">
                    <h3>${emp.name}</h3>
                    <p>📧 ${emp.email}</p>
                </div>
            `).join('');
            updateFilterInfo(`Q8: map() - Name & Email only (${result.length})`);
        }

        // Question 9: join()
        function question9() {
            const departments = employees.map(emp => emp.department);
            const uniqueDepartments = departments.filter((dept, index) => departments.indexOf(dept) === index);
            const result = uniqueDepartments.join(", ");
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Q9: join()</h2>
                    <p>Unique departments joined: <strong>${result}</strong></p>
                </div>
            `;
            updateFilterInfo("Q9: join() - Departments: " + result);
        }

        // Question 10: concat()
        function question10() {
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
            const result = employees.concat(newHires);
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Q10: concat()</h2>
                    <p>Total employees after adding new hires: <strong>${result.length}</strong></p>
                    <p style="font-size: 1em; margin-top: 10px; color: #ccc;">Original: ${employees.length} + New hires: ${newHires.length}</p>
                </div>
            `;
            grid.innerHTML += result.map(emp => `
                <div class="employee-card">
                    <h3>${emp.name}</h3>
                    <p>📧 ${emp.email}</p>
                    <p>🏢 ${emp.department}</p>
                    <p>💼 ${emp.position}</p>
                    <p>🛠️ ${emp.primarySkill}</p>
                    <p>💰 $${emp.salary.toLocaleString()}</p>
                    <p>📅 ${emp.yearsOfExperience} years experience</p>
                    <span class="badge">${emp.isRemote ? '🏠 Remote' : '🏢 Office'}</span>
                </div>
            `).join('');
            updateFilterInfo(`Q10: concat() - Total employees: ${result.length}`);
        }

        // Bonus 1
        function bonus1() {
            const filtered = employees.filter(emp => emp.primarySkill === "JavaScript");
            const result = filtered.map(emp => emp.name).join(", ");
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Bonus 1</h2>
                    <p>JavaScript developers: <strong>${result}</strong></p>
                </div>
            `;
            grid.innerHTML += filtered.map(emp => `
                <div class="employee-card">
                    <h3>${emp.name}</h3>
                    <p>📧 ${emp.email}</p>
                    <p>🏢 ${emp.department}</p>
                    <p>💼 ${emp.position}</p>
                    <p>🛠️ ${emp.primarySkill}</p>
                    <p>💰 $${emp.salary.toLocaleString()}</p>
                    <p>📅 ${emp.yearsOfExperience} years experience</p>
                    <span class="badge">${emp.isRemote ? '🏠 Remote' : '🏢 Office'}</span>
                </div>
            `).join('');
            updateFilterInfo("Bonus 1: JavaScript developers - " + result);
        }

        // Bonus 2
        function bonus2() {
            const remoteEmployees = employees.filter(emp => emp.isRemote);
            const result = remoteEmployees.every(emp => emp.yearsOfExperience >= 4);
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Bonus 2</h2>
                    <p>Do all remote employees have 4+ years experience? <strong>${result}</strong></p>
                </div>
            `;
            grid.innerHTML += remoteEmployees.map(emp => `
                <div class="employee-card">
                    <h3>${emp.name}</h3>
                    <p>📧 ${emp.email}</p>
                    <p>🏢 ${emp.department}</p>
                    <p>💼 ${emp.position}</p>
                    <p>🛠️ ${emp.primarySkill}</p>
                    <p>💰 $${emp.salary.toLocaleString()}</p>
                    <p>📅 ${emp.yearsOfExperience} years experience</p>
                    <span class="badge">${emp.isRemote ? '🏠 Remote' : '🏢 Office'}</span>
                </div>
            `).join('');
            updateFilterInfo("Bonus 2: All remote employees have 4+ years? " + result);
        }

        // Bonus 3
        function bonus3() {
            const allSkills = employees.map(emp => emp.primarySkill);
            const result = allSkills.filter((skill, index) => allSkills.indexOf(skill) === index);
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Bonus 3</h2>
                    <p>Unique skills: <strong>${result.join(", ")}</strong></p>
                </div>
            `;
            updateFilterInfo("Bonus 3: Unique skills - " + result.join(", "));
        }

        // Bonus 4
        function bonus4() {
            const engineeringEmps = employees.filter(emp => emp.department === "Engineering");
            let totalSalary = 0;
            for (let i = 0; i < engineeringEmps.length; i++) {
                totalSalary += engineeringEmps[i].salary;
            }
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="result-box">
                    <h2>Bonus 4</h2>
                    <h3 style="font-size: 2.5em; margin: 15px 0;">$${totalSalary.toLocaleString()}</h3>
                    <p>Engineering Department Total Salary</p>
                    <p style="font-size: 1em; margin-top: 10px; color: #ccc;">
                        ${engineeringEmps.length} employees | Average: $${Math.round(totalSalary / engineeringEmps.length).toLocaleString()}
                    </p>
                </div>
            `;
            grid.innerHTML += engineeringEmps.map(emp => `
                <div class="employee-card">
                    <h3>${emp.name}</h3>
                    <p>📧 ${emp.email}</p>
                    <p>🏢 ${emp.department}</p>
                    <p>💼 ${emp.position}</p>
                    <p>🛠️ ${emp.primarySkill}</p>
                    <p>💰 $${emp.salary.toLocaleString()}</p>
                    <p>📅 ${emp.yearsOfExperience} years experience</p>
                    <span class="badge">${emp.isRemote ? '🏠 Remote' : '🏢 Office'}</span>
                </div>
            `).join('');
            updateFilterInfo(`Bonus 4: Engineering Total Salary - $${totalSalary.toLocaleString()}`);
        }

        // Helper function to show text results
        function showResult(title, message) {
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div style="grid-column: 1/-1; background: #333; color: white; padding: 40px; text-align: center;">
                    <h2 style="font-size: 2em; margin-bottom: 20px;">${title}</h2>
                    <p style="font-size: 1.3em;">${message}</p>
                </div>
            `;
            updateFilterInfo(title);
        }

        // Global variables for filtering
        let currentFilter = 'all';
        let currentEmployeeList = employees;

        // Populate department dropdown
        function populateDepartments() {
            const departments = employees.map(emp => emp.department);
            const uniqueDepartments = departments.filter((dept, index) => departments.indexOf(dept) === index);
            const select = document.getElementById('departmentFilter');
            select.innerHTML += uniqueDepartments.map(dept => 
                `<option value="${dept}">${dept}</option>`
            ).join('');
        }

        // Populate skills dropdown
        function populateSkills() {
            const skills = employees.map(emp => emp.primarySkill);
            const uniqueSkills = skills.filter((skill, index) => skills.indexOf(skill) === index);
            const select = document.getElementById('skillFilter');
            select.innerHTML += uniqueSkills.map(skill => 
                `<option value="${skill}">${skill}</option>`
            ).join('');
        }

        // Update filter info
        function updateFilterInfo(message) {
            document.getElementById('filterInfo').innerHTML = `<strong>Showing:</strong> ${message}`;
        }

        // Show all employees
        function showAllEmployees() {
            currentEmployeeList = employees;
            displayEmployees(employees);
            updateFilterInfo(`All Employees (${employees.length})`);
        }

        // Filter by department
        function filterByDepartment() {
            const dept = document.getElementById('departmentFilter').value;
            if (!dept) {
                showAllEmployees();
                return;
            }
            const filtered = employees.filter(emp => emp.department === dept);
            currentEmployeeList = filtered;
            displayEmployees(filtered);
            updateFilterInfo(`${dept} Department (${filtered.length} employees)`);
        }

        // Filter by skill
        function filterBySkill() {
            const skill = document.getElementById('skillFilter').value;
            if (!skill) {
                showAllEmployees();
                return;
            }
            const filtered = employees.filter(emp => emp.primarySkill === skill);
            currentEmployeeList = filtered;
            displayEmployees(filtered);
            updateFilterInfo(`Skill: ${skill} (${filtered.length} employees)`);
        }

        // Reset all filters
        function resetFilters() {
            document.getElementById('departmentFilter').value = '';
            document.getElementById('skillFilter').value = '';
            document.getElementById('searchBar').value = '';
            showWelcome();
        }

        // Display employees function
        function displayEmployees(employeeList) {
            const grid = document.getElementById('employeesGrid');
            
            if (employeeList.length === 0) {
                grid.innerHTML = '<div class="no-results">No employees found</div>';
                return;
            }
            
            grid.innerHTML = employeeList.map(emp => `
                <div class="employee-card">
                    <h3>${emp.name}</h3>
                    <p>📧 ${emp.email}</p>
                    <p>🏢 ${emp.department}</p>
                    <p>💼 ${emp.position}</p>
                    <p>🛠️ ${emp.primarySkill}</p>
                    <p>💰 $${emp.salary.toLocaleString()}</p>
                    <p>📅 ${emp.yearsOfExperience} years experience</p>
                    <span class="badge">${emp.isRemote ? '🏠 Remote' : '🏢 Office'}</span>
                </div>
            `).join('');
        }

        // Show welcome message initially
        function showWelcome() {
            const grid = document.getElementById('employeesGrid');
            grid.innerHTML = `
                <div class="welcome-box">
                    <h2>👈 Use the sidebar to filter employees</h2>
                    <p>Select any filter option to view employee data</p>
                </div>
            `;
        }

        // Search functionality
        function searchEmployees() {
            const searchTerm = document.getElementById('searchBar').value.toLowerCase();
            const filtered = currentEmployeeList.filter(emp => 
                emp.name.toLowerCase().includes(searchTerm) ||
                emp.department.toLowerCase().includes(searchTerm) ||
                emp.position.toLowerCase().includes(searchTerm) ||
                emp.primarySkill.toLowerCase().includes(searchTerm)
            );
            displayEmployees(filtered);
        }


        // Initialize
        populateDepartments();
        populateSkills();
        showWelcome();