import {
  Controller,
  Get,
  Param,
  Delete,
  Query,
  Patch,
  Body,
  Post,
  UseGuards, Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserUpdateDto } from './dto/user-update.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user-front')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('get-all')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Get('get-one/:id')
  getOneUser(@Param('id') id: string) {
    return this.userService.getOneUser(+id);
  }

  @Post('add')
  addUser(@Body() userUpdateDto: UserUpdateDto,) {
    return this.userService.addUser(userUpdateDto);
  }

  @Patch('edit-one/:id')
  editOneUser(
    @Param('id') id: string,
    @Body() userUpdateDto: UserUpdateDto,
    ) {
    return this.userService.editUser(+id, userUpdateDto);
  }
  @Get('get-by-name')
  GetByText(@Req() req: {name: string}) {
    return this.userService.findByName(req);
  }
  @Delete('edit-one/:id')
  deleteOneUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
