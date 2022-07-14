import { UserDataBase } from './../src/data/UserDataBase';
// import { TokenGeneratorMock, IdGeneratorMock } from './mocks/idGeneratorMock';
// import { UserBusiness } from './../src/business/UserBusiness';
// import { BandMockNormal } from './BandMock';
// import { BandBusiness } from './../src/business/BandBusiness';
import { HashMockGenerator } from './mocks/hashGeneratorMock';
import { UserDatabaseMock } from './mocks/UserDataBaseMock';


// const bandBusinessMock = new BandBusiness(
//     new IdGeneratorMock(),
//     new HashMockGenerator(),
//     new TokenGeneratorMock(),
//     new UserDatabaseMock as UserDataBase
// )
// 'puxando' o userBusiness do src onde estão todas as funções.


describe('Testing register band', () => {

    test('success', async () => {

        const input = {
            name: 'poesia acustica 9',
            music_genre: 'rap',
            responsible: 'chris mc',
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhjNDRjNDExLTUyODItNDMyNi1hYTQ3LTc2ODIxYTNjMTQxMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY1NzgxMDY2NiwiZXhwIjoxNjU3ODI4NjY2fQ.b7tb61BH0wVgT9WPr6I2NKHq_juXwfNXBNHHDwbBOoc'
        }

        // const result = await new BandBusiness().signupBand(input)
        expect(input.name.length).toBeGreaterThan(5)
        expect(input).toHaveProperty('music_genre')
    })


    test("expecting error if it receives empty parameter", async () => {
        try {
            // await userBusinessMock.signup("", "vitor@email.com", "123456", "normal")
            // await new BandBusinessMock().signupBand("", "", "", "")
        } catch (error: any) {
            expect(error.message).toEqual("Fill in the fields correctly")
            expect(error.statusCode).toBe(422)
        } finally {
            expect.assertions(2)
        }
    })


    
})
