// Basic Types

let id: number = 5;
let company: string = "Lighthouse Labs";
let isPublished: boolean = true;
let x: any = "hello";
let age: number;

let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [true, 5, "string"];

// Tuple
let person: [number, string] = [1, "string"];
// Tuple array
let employee: [number, string][];

employee = [
  [1, "string"],
  [2, "hello"],
];

// Union
let ProductID: string | number = 22;
ProductID = "300";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerID = <number>cid
let customerID = cid as number;
customerID = 23;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interfaces

interface UserInterace {
  readonly id: number; //read-only
  name: string;
  age?: number; //optional
}

const user1: UserInterace = {
  id: 1,
  name: "John",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes

class Person implements PersonInterface {
  id: number;
  name: string;

  //private: Only access the property within the class
  //protected: Only access within this class or any class that's been extended from this class

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Dave", "Manager");

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["jo", "hi", "get"]);
