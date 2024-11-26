import { Test, TestingModule } from '@nestjs/testing';
import { AutqService } from './autq.service';

describe('AutqService', () => {
  let service: AutqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutqService],
    }).compile();

    service = module.get<AutqService>(AutqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
