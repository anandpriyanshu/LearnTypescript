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

// Type: It is the shape of the object

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

// Interfaces: It is the shape of the object. Same as type alias and chef of any object like type alias.

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


//Extend : to overcome the dublicates data,  we use extend here. so that we can reuse

// interface Book {
//     name: string;
//     price: number
// }

// interface Ebook extends Book {
//     // name: string;
//     // price: number;
//     filesize: number;
//     filType: string;
// }
// interface Audiobook extends Ebook {
//     // name: string;
//     // price: number;
//     // filesize: number;
//     // filType: string;
//     duration: number;
// }



// const book: Audiobook = {
//     name: "Atomic habit",
//     price: 1200,
//     filesize: 300,
//     filType: "pdf",
//     duration: 5,
// }


/////////////

// Merge: we can merge two interfaces

// interface Book {
//     name: string;
//     price: number
// }

// interface Book {
//     size: number
// }

// const book: Book = {
//     name: "The power of habit",
//     price: 400,
//     size: 45,
// }


//Limitations

// dublication is not possible in type  but in interface

// type Book {
//     name: string;
//     price: number
// }

// type Book {
//     size: number
// }

// use for primitive
// type Sanitized = string;
// type EvenNum = number;


///////////////////

// Unions


// type ID = number | string;
// //Narrowing
// function printId(id: ID) {
//     if (typeof id === "string") {
//         console.log(id.toUpperCase())
//     } else {
//         console.log(id)
//     }

// }
// console.log(printId("4"))
// // console.log(printId(4))




// function getFirstThree(x: string | number[]) {
//     return x.slice(0, 3)
// }

// console.log(getFirstThree('hello'))
// console.log(getFirstThree([1, 2, 3, 4, 5, 6, 7]))

//////////////////////////////////////

//Generics: andar koi bhi data send karo kaam hona chahhiye and type information loss nhi hona chahiye

// Exm1
// function logString(arg: string) {
//     console.log(arg)
//     return arg
// }
// logString("Logged ")

// function logNumber(arg: number) {
//     console.log(arg)
//     return arg
// }
// logNumber(1)

// function logArray(arg: any[]) {
//     console.log(arg)
//     return arg
// }
// logArray([2, 3])

// no need to repeat above code

// function logAnything<T>(arg: T): T { //here T is placeholder and T can be anything(Kuch bhi). To overcome loss of type information we use placeholder
//     console.log(arg)
//     return arg
// }
// logAnything([1, 2, 'hello'])


///////////////////////

// Exm2
// interface HasAge {
//     age: number;
// }

// function getOldest<T extends HasAge>(people: T[]): T {  //Created gneneric function hamne contract kar diya ki aisa koi bhi object dene jisake andar 'age' property ho
//     return people.sort((a, b) => b.age - a.age).[0]
// }

// const people: HasAge[] = [
//     { age: 20 },
//     { age: 40 },
//     { age: 70 }

// ]


// interface Player {
//     name: string;
//     age: number;
// }

// const players: Player[] = [
//     { name: 'John', age: 30 },
//     { name: 'Jon', age: 35 },
//     { name: 'Rogn', age: 60 }
// ]
// // getOldest(players)

// // Assertion
// // const person = getOldest(players) as Player   //jo obj return ho rha usko hamne 'Player' type jabardasti bol diya but it's not recommended
// //  In that case we use Generics


// //Generics
// const person = getOldest(players)

// Exm3

// interface IPost {
//     title: string;
//     id: number;
//     description: string;
// }

// interface IUser {
//     id: number;
//     name: string;
//     age: number;
// }

// const fetchData = async (path: string): Promise<IPost[]> => {  //made generics using IPost type
//     const res = await fetch(`https//example.com${path}`)
//     return res.json()
// }

// const fetchUserData = async (path: string): Promise<IUser[]> => {  //made generics using IUser type
//     const res = await fetch(`https//example.com${path}`)
//     return res.json()
// }


//No need to repeate the above code
// created generic function

// const fetchData = async<ResultType>(path: string): Promise<ResultType> => {
//     const res = await fetch(`https//example.com${path}`)
//     return res.json()
// }

// (async () => {
//     // const posts = await fetchData('/posts')
//     // posts[0]
//     // const users = await fetchUserData('/users')
//     // users[0].
//     //////////
//     //Generics
//     // const users = fetchData<IUser[]>('/users')        //IUser is generic
//     // users[0].
//     const posts = await fetchData<IPost[]>('/posts')   //IPost is generic
//     posts[0]

// })()


////////////////////////////

// Structural and Duck typing

// interface ICreadential {
//     username: string;
//     password: string;
//     isAdmin?: boolean
// }

// function login(credentials: ICreadential): boolean {
//     console.log(credentials)
//     return true
// }

// const user = {   //here without mention type in user, login accept the 'Icredential' iin line 341  and this is possible becauss of   Structural and Duck typing
//     username: 'Anand',
//     password: 'secret',
//     isAdmin: true
// };

// login(user)

// exm


// login(user)


// interface IAuth {
//     username: string;
//     password: string;
//     login(username: string, password: string): boolean;
// }

// const auth: IAuth = {
//     username: 'Anand',
//     password: 'secret',
//     login(usename: string, password: string) {  //here username and password are diffrent from line 356 and 357
//         return true
//     }
// }





