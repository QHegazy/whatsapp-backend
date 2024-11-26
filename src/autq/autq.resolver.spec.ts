import { Test, TestingModule } from '@nestjs/testing';
import { AutqResolver } from './autq.resolver';
import { AutqService } from './autq.service';

describe('AutqResolver', () => {
  let resolver: AutqResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutqResolver, AutqService],
    }).compile();

    resolver = module.get<AutqResolver>(AutqResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
