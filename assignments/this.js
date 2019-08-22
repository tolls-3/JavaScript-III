/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding/Window Binding:The "this" keyword in the window binding i.e global scope, refers to the global objects 
     which is the window object. e.g console.log(this);....when we call this in the window binding,
     it returns the window objects. Also, every variable that is declared in the global scope will be attached 
     to the window object.

* 2. Implicit (Object) Binding: The "this" keyword in the implicit binding refers to the object itself, when it is called, 
     it returns the closest parent object. Here we call the functions via the objects.
     
* 3. Explicit Binding: Here we explicitly bind the specific object in the function call. e.g .call()

* 4. New Binding: Whenever a new keyword is invoked, a brand new object is created and called "this".So when a 
    function is called with "new", the "this" keyword is pointing to that new object that was created.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function foo(){
    return this;
     }
foo();

// Principle 2

// code example for Implicit Binding

var person = {
    first: 'Tolu',
    last: 'Smith',  
    gender: 'Male',
    full: function() {
      console.log(this);
    }
  };
person.full();

// Principle 3

// code example for New Binding

function Student (name, age, level) {
    this.name = name;
    this.age = age;
    this.level =level;
  }
  
  let person = new Student('Tyler', 27, '2nd Year');

// Principle 4

// code example for Explicit Binding

function greet (lang1, lang2, lang3) {
    alert(
      `Hello, my name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`
    )
  }
  
  const family = {
      son:{
        name: 'Tyler',
        age: 27,
      },

      father:{
          name:'jake',
          age:57
      },

      mother:{
        name:"Jane",
        age:"59"
      }
    
  }
  
  const langs = ['JavaScript', 'HTML', 'CSS'];
  
  greet.call(user.father, langs[0], langs[1], langs[2]);




// var obj ={
//     a:2,
//     b:3,
//     foo:foo
// }
// obj.foo();

// const family = {
//     name: 'Tyler',
//     age: 27,
//     greet() {
//       alert(`Hello, my name is ${this.name}`)
//     },
//     mother: {
//       name: 'Stacey',
//       greet() {
// //         alert(`Hello, my name is ${this.name}`)
// //       }
// //     },
// //     father:{
// //         name:'Frank',
// //         age:57,
// //         drink(){
// //             alert(`Give me beer, I am ${this.age} years old.`)
// //         }
// //     }
    
// //   }

// function drink(){
//     alert(`Give me beer, I am ${this.age} years old.`)
// };
// const people = {
//     son:{
//         name: 'Tyler',
//         age: 27,
//         // greet() {
//         //   alert(`Hello, my name is ${this.name}`)
//         // },
//     },
   
//     mother: {
//       name: 'Stacey',
//     //   greet() {
//     //     alert(`Hello, my name is ${this.name}`)
//     //   }
//     },
//     father:{
//         name:'Frank',
//         age:57,
//         // drink(){
//         //     alert(`Give me beer, I am ${this.age} years old.`)
//         // }
//     }
    
//   }

