import { Test, TestingModule } from '@nestjs/testing';
import { NpanewsService } from './npanews.service';

describe('NpanewsService', () => {
  let service: NpanewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NpanewsService],
    }).compile();

    service = module.get<NpanewsService>(NpanewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
