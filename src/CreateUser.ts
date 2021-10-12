import User from './User'

interface CreateUserDTO {
  id: string
  name: string
  email: string
  password: string
}

export default class CreateUser {
  private users: User[] = []

  async create({id, name, email, password}: CreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, {id, name, email, password})

    this.users.push(user)

    return user
  }
}
