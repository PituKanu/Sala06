import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private nextId = 1;

  create(user: Omit<User, 'id'>): User {
    const newUser: User = {
      id: this.nextId++,
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((item) => item.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  remove(id: number): { message: string } {
    const index = this.users.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    this.users.splice(index, 1);
    return { message: `User ${id} deleted` };
  }
}
