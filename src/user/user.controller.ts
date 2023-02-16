import { Injectable, NotFoundException } from '@nestjs/common';
import { writeFile, readFileSync } from 'fs';
import { UserUpdateDto } from './dto/user-update.dto';
@Injectable()
export class UserService {
  async getAllUser() {
    const data = readFileSync('./data.json', 'binary');
    return JSON.parse(data) 
  }

  async getOneUser(id: number) {

      const data = readFileSync('./data.json', 'binary');
      const userList = await JSON.parse(data) 
      
      const user = userList.filter(u => u.id === id)
      
      return user

  }
  async FindByName(req: any) {

      const data = readFileSync('./data.json', 'binary');
      const userList = await JSON.parse(data)

      const user = userList.filter(u => {

        let position = u.name.search(req.query.name);

        if ((position === 0) === true){
        return u
        }
      })

      return user

  }
  async addUser(userUpdateDto: UserUpdateDto) {

      const { name, email, password } = userUpdateDto;

      const data = readFileSync('./data.json', 'binary');
      const userList = await JSON.parse(data) 
      const lastUser = userList[userList.length - 1]
      console.log(userList, lastUser);
      
      const newUser = {
        id : lastUser ? lastUser.id + 1 : 1,
        name: name,
        email: email,
        password: password
      }
      userList.push(newUser)

      writeFile(
        './data.json',
        JSON.stringify(userList),
          err => {
            if (err) {
              console.log('Error writing file', err)
              console.log('Successfully wrote file')
          }
        }
      )

  }

  async editUser(id: number, userUpdateDto: UserUpdateDto) {

      const { name, email, password } = userUpdateDto;

      const data = readFileSync('./data.json', 'binary');
      const userList = await JSON.parse(data) 
  
      const idx = userList.findIndex(u => u.id === id)
      if (idx < 0) throw new NotFoundException()
  
      const updatedUser = {
        id,
        name,
        email,
        password
      }
      userList[idx] = updatedUser

      writeFile(
        './data.json',
        JSON.stringify(userList),
          err => {
            if (err) {
              console.log('Error writing file', err)
          } else {
              console.log('Successfully wrote file')
          }
        }
      )

  }

  async deleteUser(id: number) {
      const data = readFileSync('./data.json', 'binary');
      const userList = await JSON.parse(data) 
  
      const idx = userList.findIndex(u => u.id === id)
      if (idx < 0) throw new NotFoundException()
  
      userList.splice(idx, 1)

      writeFile(
        './data.json',
        JSON.stringify(userList),
          err => {
            if (err) {
              console.log('Error writing file', err)
          } else {
              console.log('Successfully wrote file')
          }
        }
      )

  }
}
