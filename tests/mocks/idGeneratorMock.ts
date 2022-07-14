import { USER_ROLES } from "../../src/model/User"
import { authenticationData } from "../../src/model/model"

export class IdGeneratorMock {
    public generate = (input: authenticationData): string => {
        return "token"
    }

    public verify(token: string) {
        return {
            id: "id_mock",
            role: USER_ROLES.NORMAL
        }
    }
} 