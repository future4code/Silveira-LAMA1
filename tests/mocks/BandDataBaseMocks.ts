import { USER_ROLES } from "../../src/model/User"
import { BandMockNormal, BandMockAdmin } from "../BandMock"



export class BandDataBaseMocks {

    getBandById = async (id: string) => {
        switch (id) {
            case "idmockband1":
                return BandMockNormal
            case "idmockband2":
                return BandMockAdmin
            default:
                return undefined
        }
    }
}


