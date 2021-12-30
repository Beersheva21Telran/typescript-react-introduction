var num = 20;
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i),1000);
// }
var str = "abc";
var myBoolean;
var num1 = +str;
var comparator;
myBoolean = !!"abcd";
comparator = function (n, b) {
    if (n === void 0) { n = 10; }
    if (b === void 0) { b = 20; }
    return n - b;
};
var c = comparator() + "str";
//console.log(c);
var m = +str - +c;
var a1;
a1 = 10;
a1 = "10";
a1 = { d: 25, c: "ddd" };
var a2;
a2 = 234;
a2 = true;
a2 = { d: 25, c: "ddd" };
a1 = a2;
//console.log(a1.d);
a1 = str;
myBoolean = a1;
str = "12";
console.log(comparator(str, 12));
var a10;
a10 = 100;
a10 = "100";
var person1 = { id: 123, name: "Moshe", getName: function () { return this.name; } };
var id = "tttt";
person1[id] = 123;
console.log(person1[id]);
var empl = { id: 123, name: "Nik", salary: 5000 };
