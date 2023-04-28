// let symbol = Symbol()

// let symbol1 = Symbol("name")
// let symbol2 = Symbol("name")

// student =  {
//     login: "user1",
//     [Symbol("data")]: "Chox lazimli data",
//     foo: function (){
//
//     }
// }
// console.log(student.data)
// console.log(Object.keys(student))
// console.log(Object.getOwnPropertyNames(student))
// console.log(Object.getOwnPropertySymbols(student))
// let id = Symbol("id")
// let user = {
//     id: 1,
//     login: "mylog"
// }
// user[id] = 5
// console.log(user.id)
//
// console.log(user[id])
// console.log(user)
// let name1 = Symbol.for("id")
// let name2 = Symbol.for("name")
// console.log(name1 === name2)


let user1 = {
    login:"User2",
    [Symbol.for("data")]: "Some"
}
let userData = Symbol.for("data")
console.log(user1[userData])


