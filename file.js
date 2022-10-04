



let x = 2;
let y = 1;

// Arithmetic Operators
console.log("Addition: ",x+y);
console.log("Substraction: ",x-y);
console.log("Divide: ",x/y);
console.log("Modulo: ",x%y);
console.log("Multiplication: ",x*y);
console.log("Exponentation: ",x**y);

// Assignment Oprators

let c = x;
let d = y
console.log("Assign: ",c,d);

c +=x;
d += y;
console.log("Addition Assignment: ",c,d);

c -=x;
d -= y;
console.log("substraction Assignment: ",c,d);

c *=x;
d *= y;
console.log("Mul Assignment: ",c,d);

c /=x;
d /= y;
console.log("Divide Assignment: ",c,d);

c **=x;
d **= y;
console.log("Exponent Assignment: ",c,d);

x++;
console.log("Post Increment: ",x);

++x;
console.log("Pre Increment: ",x);

x--;
console.log("Post Decrement: ",x);

--x;
console.log("Pre Decrement: ",x);

// Relational Operators

if(x==y){
    console.log("Equal to",true);
}else{
    console.log("Equal to",false);
}

if(x===y){
    console.log("equal value and equal type",true);
}else{
    console.log("equal value and equal type",false);
}

if(x!=y){
    console.log("not equal",true);
}else{
    console.log("not equal",false);
}
// not equal value or not equal type
if(x !== y){
    console.log(true);
}else{
    console.log(false);
}
// greater than
if(x>y){
    console.log(true);
}else{
    console.log(false);
}
// less than
if(x<y){
    console.log(true);
}else{
    console.log(false);
}
// greater than or equal to
if(x>=y){
    console.log(true);
}else{
    console.log(false);
}
// less than or equal to
if(x<=y){
    console.log(true);
}else{
    console.log(false);
}
// ternary operator
let e = x>y ? x:y;
console.log(e);

// Logical Operators

//  logical and
if(x==y && x>y){
    console.log(true);
}else{
    console.log(false);
}

// logical or
if(x==y || x>y){
    console.log(true);
}else{
    console.log(false);
}

// logical not
if(!x){
    console.log(true);
}else{
    console.log(false);
}

// Type Operators

// returns the type of a variable
console.log(typeof x);

// returns true if an object is an instance of an object type
function Car(make){
    this.make;
}
const auto = new Car('Honda', 'Audi');
console.log(auto instanceof Car);

//  Bitwise Operators

// And
console.log(x&y);
// Or
console.log(x|y);
// not
console.log(~y);
// xor
console.log(x^y);
// left shift
console.log(x<<y);
// right shift
console.log(x>>y);
// unsigned right shift
console.log(x>>>y);

