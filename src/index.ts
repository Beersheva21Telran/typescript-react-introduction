const num: number = 20;
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i),1000);


// }
let str = "abc";
let myBoolean:boolean;
const num1:number = +str;
let comparator:(a?: number, b?: number)=>number;
myBoolean = !!"abcd";
comparator = function(n:number=10, b:number=20) {
    return n - b;
}
let c = comparator() + "str";
//console.log(c);
let m = +str - +c;
let a1:any;
a1 = 10;
a1 ="10";
a1 = {d:25, c:"ddd"};
let a2:unknown;
a2 = 234;
a2 = true;
a2 = {d:25, c:"ddd"};
a1 = a2;
//console.log(a1.d);
a1 = str;
myBoolean = a1;
str = "12";
console.log(comparator(str as any,12));
let a10;
a10 = 100;
a10 = "100";
/********************************************************* */
//Using interface
// interface Person {
//     id: number;
//     name: string;
//    getName?: ()=>string
// }
// let person1: Person = {id: 123,name: "Moshe",getName() {return this.name}};
// let id = "tttt";
// person1[id] = 123;
// console.log((person1 as any)[id]);
// interface Employee extends Person {
//     salary: number;
// }
// let empl: Employee = {id: 123, name: "Nik", salary:5000};
// interface Employee {
//     company?:string;
// }
/***************************************************************** */
//Using Type
type Person = {
    id: number;
    name: string;
   getName?: ()=>string
}
let person1: Person = {id: 123,name: "Moshe",getName() {return this.name}};
let id = "tttt";
person1[id] = 123;
console.log((person1 as any)[id]);
type Employee = Person &{
    salary: number;
}
let empl: Employee = {id: 123, name: "Nik", salary:5000};
type EmployeeCompany = Employee & {
    company:string;
}




