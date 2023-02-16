import {
  Controller,
  Get,
  Param,
  Delete,
  Patch,
  Body,
  Post,
   Req,
} from '@nestjs/common';
import { UserUpdateDto } from './dto/user-update.dto';
import {UserService} from "./user.controller";


@Controller('user')
export class userController {
  constructor(private readonly userService: UserService) {}

  @Get('get-all')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get('get-one/:id')
  getOneUser(@Param('id') id: string) {
    return this.userService.getOneUser(+id);
  }
  @Get('get-by-name')
  GetByText(@Req() req: {name: string}) {
    return this.userService.FindByName(req);
  }

  @Post('add')
  AddUser(@Body() userUpdateDto: UserUpdateDto,) {
    return this.userService.addUser(userUpdateDto);
  }

  @Patch('edit-one/:id')
  editOneUser(
    @Param('id') id: string,
    @Body() userUpdateDto: UserUpdateDto,
    ) {
    return this.userService.editUser(+id, userUpdateDto);
  }

  @Delete('edit-one/:id')
  deleteOneUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
