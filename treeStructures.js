class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  // Adds subordinates method assigning them a leader like bob
  addSubordinate(employee)
  this.subordinates.push(employee);
  employee.boss = this;
}

// Who is someone's boss?
// What's the total number of people that someone supervises?
// How many people there are between an employee and the CEO?
// Do two employees share the same boss?

// Boss
const bob = new Employee('bob', 'Project Manager', 85000);

// Employees
const james    = new Employee("james", "VP Software", 50000);
const harry = new Employee("harry", "Chief Design Officer", 50000);
const angela   = new Employee("Angela", "VP Retail", 38000);

// Drivers
bob.addSubordinate('james');
bob.addSubordinate('harry');
bob.addSubordinate('angela');
