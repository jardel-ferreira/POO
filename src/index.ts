
//import { ContaBancaria } from "./models/ContaBancaria";

import { App } from "./models/app";
import { Bike } from "./models/bike";
import { Rent } from "./models/rent";
import { User } from "./models/user";

const bike = new Bike('mountain bike', 'mountain', 
    123, 500, 100.5, 'desc', 5, [])
const user = new User('Maria', 'maria@mail.com', '1234')
const today = new Date()
const twoDaysFromToday = new Date()
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2)
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const sevenDaysFromToday = new Date()
sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7)
const rent1 = Rent.create([], bike, user, today, twoDaysFromToday)
const user2 = new User('Maria Clara', 'maria@mail.com', '3123')

const app = new App()
app.registerUser(user)


console.log(app.findUser('maria@mail.com'))
app.removeUser('maria@mail.com')
console.log(app.findUser('maria@mail.com'))

const nbike = new Bike('mountain', 'mountain', 
    123, 500, 100.5, 'desc', 5, [])
app.registerBike(nbike)

console.log(app.returnBike('mountain'))
//console.log(nbike)