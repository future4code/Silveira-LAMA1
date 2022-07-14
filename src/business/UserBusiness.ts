import { loginInputDTO } from './../types/loginInputDTO';
import { UserDataBase } from './../data/UserDataBase';
import { HashManager } from './../services/HashManager';
import { IdGenerator } from "../services/IdGenerator";
import { signupInputDTO } from './../types/signupInputDTO';
import User from '../model/User';
import Authenticator from '../services/Authenticator';


export class UserBusiness {

    public async createUser(input: signupInputDTO): Promise<any> {
        try {
            const { name, password, email, role } = input
            // campos que serão preenchidos no body da requisição
            const id = new IdGenerator().generateId()
            // função que gera o id automático
            const hashPassword = new HashManager().createHash(password)
            // função que guarda a senha 'hasheada' no banco de dados
            const newUser: User = new User(
                id,
                name,
                email,
                hashPassword,
                role
            )
            // criando um novo usuário
            await new UserDataBase().signUp(newUser)
            // inserindo o novo usuário no banco de dados
            const token = new Authenticator().generateToken({
                id,
                role: role
            })
            // gerando o token automático
            return token
            // retornando token
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async login(input: loginInputDTO) {
        try {
            const { email, password } = input

            const user = {
                email,
                password
            }

            const login = await new UserDataBase().login(user.email)

            const hashManager: HashManager = new HashManager()

            const compareResult = hashManager.compareHash(
                user.password,
                login.password
            )
            // comparando a senha do meu banco de dados com a senha que foi enviada no body da requisição pelo usuário.

            if (!compareResult) {
                throw new Error("Invalid credentials!")
            }

            const newAuthenticator = new Authenticator()
            const token = newAuthenticator.generateToken({
                id: login.id,
                role: login.role
            })
        
            return token
        } catch (error: any) {
            throw new Error(error.message || "Error to login. Please check your system administrator.");
        }
    }

}



