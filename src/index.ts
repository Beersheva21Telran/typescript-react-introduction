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

