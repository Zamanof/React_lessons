// let nadir = {
//     firstname: "Nadir",
//     lastname: "Zamanov",
//     age: 42,
//     showInfo: function(){
//         console.log(this.firstname + " " + this.lastname)
//         console.log("birth year: " + (2022 - 42))
//     }
// }
// nadir.firstname = "Salam"
// nadir.lastname = "Salamzade"
// nadir.showInfo()

// constructor functions

// function Human (firstname, lastname, age){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;

//     this.showInfo = function(){
//         console.log(this.firstname + " " + this.lastname);
//         console.log("birth year: " + (2022 - age));
//     }
// }

// let human1 = new Human("Nadir", "Zamanov", 42);
// let human2 = new Human("Salam", "Salamzadeh", 25);

// human1.showInfo()
// human2.showInfo()

// class in JS

// class Student{
//     constructor(firstname, lastname, birthday){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.birthday = birthday;
//     }
//     showInfo(){
//         console.log(this.firstname + ' ' + this.lastname);
//     }

//     showAge(){
//         const dataTime = Date.now() - Date.parse(this.birthday);
//         const age = Math.floor(dataTime / 31536000000);
//         console.log("Age: " + age);
//     }
// }

// let nadir = new Student("Nadir", "Zamanov", '10/7/1980');
// nadir.showInfo()
// nadir.showAge()

// incapsulation

// class Student{
//     #id
//     #score = 0

//     get score(){
//         return this.#score;
//     }

//     set score(value){
//         if (value>=1 && value<=5){
//             this.#score = value;
//         }
//     }
//     constructor(firstname, lastname, birthday){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.birthday = birthday;
//         this.#id = Math.floor(Math.random()*10e6)
//     }

//     showInfo(){
//         console.log(this.#id + ". " +this.firstname + ' ' + this.lastname);
//     }

//     showAge(){
//         const dataTime = Date.now() - Date.parse(this.birthday);
//         const age = Math.floor(dataTime / 31536000000);
//         console.log("Age: " + age);
//     }
// }

// const st = new Student("John", "Doe", '07/07/2007')
// console.log(st.firstname, st.lastname)
// st.firstname = "Salam";
// console.log(st.firstname, st.lastname)
// st.showInfo()
// console.log(st.score)
// st.score = 7
// console.log(st.score)
// st.score = 3
// console.log(st.score)


// inheritance

class Human{

        constructor(firstname, lastname, birthday){
            this.firstname = firstname;
            this.lastname = lastname;
            this.birthday = birthday;
        }
    
        showInfo(){
            console.log(this.firstname + ' ' + this.lastname);
        }
    
        showAge(){
            const dataTime = Date.now() - Date.parse(this.birthday);
            const age = Math.floor(dataTime / 31536000000);
            console.log("Age: " + age);
        }
    }

    class Teacher extends Human{
        constructor(firstname, lastname, birthday, subjects=[]){
            super(firstname, lastname, birthday);
            this.subjects = subjects;
        }

        showSubjects(){
            for(var subject of this.subjects){
               console.log(subject) 
            }            
        }
    }

    let teacher = new Teacher("Nadir", "Zamanov", '10/07/1980',
    ["Python", "C#", "JS"]
    )

    // teacher.showInfo()
    // teacher.showAge()
    // teacher.showSubjects()

    class Mentor extends Teacher{
        constructor(firstname, lastname, birthday, subjects = [], level){
           super(firstname, lastname, birthday, subjects);
           this.level = level; 
        }

        showSubjects(){
            console.log(this.subjects.join(','))
            document.write('<ol><li>' + this.subjects.join("<li>") + '</ol>')
        }

        showLevel(){
            console.log(this.level)
        }
        // polymorphism
        toString(){
            return this.firstname + ' ' + this.lastname + " is a " +
                    this.constructor.name
        }
        
    }

    mentor = new Mentor("Salam", "Salamzade", "01/01/2001", ["python", "c++"], 3)
    // mentor.showSubjects()

    // console.log(mentor instanceof Teacher)
    // console.log(mentor instanceof Human)
    // console.log(teacher instanceof Mentor)
    // console.log(mentor instanceof Object)
    // console.log(mentor instanceof Mentor)
    // document.write(mentor)
    // console.log(mentor)


    // extends 
    class StringInfo extends String{
        calcLetter(letter){
            let count = 0;
            let index = this.indexOf(letter);
            while(index != -1){
                count++;
                index = this.indexOf(letter, index+1)
            }
            return count;
        }
    }
    let myNewString = new StringInfo("Lorem Ipsum Dolor sit amet")
    console.log('m in ' + myNewString +' = ' + myNewString.calcLetter('m'))