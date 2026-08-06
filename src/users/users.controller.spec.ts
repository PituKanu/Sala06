import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should create and list users', () => {
    const created = controller.create({ name: 'Bruna', email: 'bruna@example.com' });

    expect(created).toEqual({ id: 1, name: 'Bruna', email: 'bruna@example.com' });
    expect(controller.findAll()).toHaveLength(1);
  });
});
