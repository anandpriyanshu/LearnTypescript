// let a: number = "1"
// //let a = 1

// function calculate(a: number, b: number) {
//     return a + b
// }
// console.log(calculate(a, 5))

//////////////////

// function getTotal(numbers: Array<number>) {
//     return numbers.reduce((acc, curr) => {
//         return acc + curr
//     }, 0)
// }
// console.log(getTotal([1, 2, 3, 4, 5]))

//////////////////


// const user = {
//     fname: "John", lname: "Doe", role: "Professor"
// }
// console.log(user)

///////////////////


// number
// string
// Array
// boolean
// Type Alias: To use create custom type, it starts with first capital letter. It makes code  more readable


// type User = {
//     name: string;
//     age: number;
//     address?: string    //here  make  address optional
// }

// // const user: User = {
// //     name: "Anand",
// //     age: 24,
// //     // address: "UP"
// // }

// function logIn(useData: User): User {
//     return useData
// }


// const user = {
//     name: "Anand",
//     age: 24,
// }


// console.log(logIn(user))


// type ID = number | string;
// const userid: ID = "123"


/////////////////////////////

// Interfaces: Same as type alias and chef of any object like type alias

// interface Transaction {
//     payerAccountNumber: number
//     payeeAccountNumber: number
// }

// interface BankAccount {
//     accountNumber: number;
//     accountHolder: string;
//     balance: number;
//     isActive: boolean;
//     transactions: Transaction[]
// }

// const transactions1: Transaction = {
//     payerAccountNumber: 123,
//     payeeAccountNumber: 456
// }
// const transactions2: Transaction = {
//     payerAccountNumber: 123,
//     payeeAccountNumber: 457
// }

// const bankAccount: BankAccount = {

//     accountNumber: 123,
//     accountHolder: 'John',
//     balance: 4000,
//     isActive: true,
//     transactions: [transactions1, transactions2]
// }


//Extend

interface Book {
    name: string;
    price: number
}

const book: Book = {
    name: "Atomic habit"
}
