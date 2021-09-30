"use strict";
// Basic Types
let id = 5;
let company = "Lighthouse Labs";
let isPublished = true;
let x = "hello";
let age;
let ids = [1, 2, 3, 4];
let arr = [true, 5, "string"];
// Tuple
let person = [1, "string"];
// Tuple array
let employee;
employee = [
    [1, "string"],
    [2, "hello"],
];
// Union
let ProductID = 22;
ProductID = "300";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerID = <number>cid
let customerID = cid;
customerID = 23;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    //private: Only access the property within the class
    //protected: Only access within this class or any class that's been extended from this class
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
// SubClass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Dave", "Manager");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["jo", "hi", "get"]);
