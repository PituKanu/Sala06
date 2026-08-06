import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  it('should create, list, read, and delete users in memory', () => {
    const created = service.create({ name: 'Ana', email: 'ana@example.com' });

    expect(created).toEqual({ id: 1, name: 'Ana', email: 'ana@example.com' });
    expect(service.findAll()).toHaveLength(1);
    expect(service.findOne(1)).toEqual(created);

    service.remove(1);

    expect(service.findAll()).toEqual([]);
  });
});
