import bcrypt from 'bcrypt'

const users = [
  {
    username: 'John Doe',
    email: 'john@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    username: 'Jane Doe',
    email: 'jane@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    username: 'Steve Doe',
    email: 'steve@test.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
