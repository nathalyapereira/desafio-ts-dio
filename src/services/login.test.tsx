import { login } from "./login"

describe('login', () => {
    it('Deve exibir um alert com boas vindas', () => {
        login()
        expect(window.alert).toBeCalled()
    })
})