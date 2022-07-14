import User from "../../src/model/User";




export class UserDatabaseMock {

    public async signUp(user: User): Promise<void> {

    }

    public async login(email: string): Promise<any> {
        
    }
}