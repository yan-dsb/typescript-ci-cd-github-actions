import {describe, it, expect} from '@jest/globals'
import CreateUser from './CreateUser'

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const createUser = new CreateUser()
    const user = await createUser.create({
      id: '123',
      name: 'user',
      email: 'user@user.dev',
      password: '123456'
    })

    expect(user).toHaveProperty('id')
  })
})
