import { login } from "./login"

describe('login', () => {
    const mockEmail = 'nath@dio.bank'
    const mockPassword = '123456'
    it('Deve exibir um alert com boas vindas', async () => {
       const response = await login(mockEmail, mockPassword)
       expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email e/ou senha seja invalido', async () => {
        const response = await login('email@invalido.me', 'Senha invalida')
        expect(response).toBeFalsy()

    })
})