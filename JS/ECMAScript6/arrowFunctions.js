// let msg = (name) => {return `Hello ${name}`}
// console.log(msg("Nadir"))
// let add = (num1, num2)=> num1 + num2;
// let subtract = (num1, num2)=> num1 - num2;
// console.log(add(25, subtract(25, 8)))

// let getUser = (name, surname) => ({name: name, surname:surname});
// user1 = getUser("Nadir", "Zamanov");
// user2 = getUser("Salam", "Salamzade");
// console.log(user1)
// console.log(user2)

// callBack functions
// let arr = [23, 68, 694, 125]
// console.log(`arr = ${arr}`)
//
// let result = arr.map(e => e * 5);
// console.log(`result = ${result}`)
//
// function return_even(n){
//     return n % 2 != 0
// }
//
// let odd = arr.filter(e => e % 2==0)
// let even = arr.filter(return_even)
// console.log(odd)
// console.log(even)


// let student = {
//     name:"Nadir",
//     showInfo:function (){
//         console.log(this.name)
//     }
// }
//
//
// student.showInfo()


// let studentNadir = {
//     nameStudent: "Nadir",
//     diciplines: ['Python', "C++", "C#"],
//     showDiciplines: function () {
//         // let st = this
//         let print =  (el)=> {
//             console.log(`${this.nameStudent} learn ${el}`)
//         }
//         for (let i = 0; i < this.diciplines.length; i++) {
//             print(this.diciplines[i]);
//         }
//     }
// }
// studentNadir.showDiciplines()


// let person = {
//     myName: "Kenan",
//     holla:() =>{
//         console.log(`Hello ${this.myName}`)
//     }
// }
// person.holla()

