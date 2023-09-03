import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";
import crypto from 'crypto'

export class App {
    users: User[] = []
    bikes: Bike[] = []
    rents: Rent[] = []

    findUser(email: string): User | undefined{
        return this.users.find( user => user.email === email)
    }

    registerUser(user: User): void {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.')
            }
        }
        user.id = crypto.randomUUID()
        this.users.push(user)
    }
    registerBike(bike: Bike): void{
        for (const rbike of this.bikes) {
            if (rbike.name === bike.name) {
                throw new Error('Duplicate user.')
            }
        }
        bike.id = crypto.randomUUID()
        this.bikes.push(bike)
    }
    removeUser(email: string): void{
        for (const rUser of this.users) {
            if (rUser.email === email) {
                this.users = this.users.filter(user => this.users !== this.users)
            }
        }
    }

    //rentBike(): void{
        //this.rents.

    //}
    returnBike(name: string): Bike | undefined{
        //return this.bikes.find( bike => bike.name === name)
        for (const rbike of this.bikes) {
            if (rbike.name === name) {
                return rbike
            }
        }
    }
}