var employeeform = [];

function Employee(name, title, salary, status = "Full Time") {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status; 
};

Employee.prototype.printEmployeeForm = function (){
    console.log("Name: " + this.name + ", Job Title: " + this.title + ", Salary: " + this.salary + ", Status: " + this.status);
    };

var phill = new Employee("Phill", "Boss", "1M", "Part-Time");
var jared = new Employee("Jared", "Assistant", "30k");
var taylor = new Employee("Taylor", "Coffee Getter", "100k", "Contract");
var chazz = new Employee("Chazz", "Janitor", "75k", "Contract");

phill.printEmployeeForm();
jared.printEmployeeForm();
taylor.printEmployeeForm();
chazz.printEmployeeForm();

console.log(employeeform);